'use client'
import { createContext, useContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { IContest } from '@/components/custom/contests';

import '@/app/styles.css';
import { Separator } from "@radix-ui/react-separator"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
    SelectSeparator,
  } from "@/components/ui/select"

import PinnedCandidates from './pinned-candidates';
import Contests from "./contests"

import conversions from '@/lib/data/contestConversion.json'


/// ============================================
/// Summary
/// This file contains the Election components for the /ballot page.
///
/// Remarks
/// • The current selection is managed through two things: IElectionContext, and IConversion.
///     • IElectionContext is basically useState(), but can be accessed by any child (rather than being passed as props).
///     • IConversion is a JSON file that contains the conversion data for election ids. This was made to translate between <ElectionSelector> and contestData.json.
/// 
/// TODOs
/// • *Automate the creation of contestConversion.json.
///     • Maybe update format of IConversion? Lots of overlapping data for easier entry...
///     • Potentially, create a script that handles all conversions from contestData.json. 
///     • Notably, there should be a way to convert a number (e.g. 20230714) into year, month, day.
///     • Also consider creating a dictionary system for election descriptions.
/// • Use conversions to populate options in <ElectionSelector>
/// • Use conversions to populate <ElectionOverview> (Dates & Deadlines)
/// • *Update buttons in <ElectionOverview> to link to the correct pages.
/// • Stop sitebar from changing width when <ElectionSelector> is clicked.
/// • Update sitebar styling, the glass effect is really ugly rn lol
///
/// • Add ContestData as a context, to pass down to <Contests> and <PinnedCandidates>.
/// • Figure out where to put UserContext...
/// ============================================





///////////////////////////////////////
//////////////// Utils ////////////////
///////////////////////////////////////

// Note: A context is similar to useState(), but it is global and can be accessed by any child component. This makes for cleaner code.

// Stores the current election id as a context.
interface IElectionInfoContext {
    electionInfo: string;
    setElectionInfo: Dispatch<SetStateAction<string>>;
}

interface IElectionItem {
    election_id: number;
    election_type: string;
    voting_start: number;
    register_by: number;
    voting_end: number;
    contests: IContest[];
}

const ElectionInfoContext = createContext<IElectionInfoContext>({
    electionInfo: "2023-nov",
    setElectionInfo: () => {},
});


// Note: Mutating should be done by creating a new array with setContestData(), not by pushing to contestData.
// src: https://react.dev/learn/updating-arrays-in-state 
interface IContestDataContext {
    contestData: IContest[];
    setContestData: Dispatch<SetStateAction<IContest[]>>;
}

export const ContestDataContext = createContext<IContestDataContext>({
    contestData: new Array<IContest>(),
    setContestData: () => {},
});

interface IUserContext {
    userId: number;
    setUserId: Dispatch<SetStateAction<number>>;
  }
  
export const UserContext = createContext<IUserContext>({
userId: 0,
setUserId: () => {},
});
  



// IConversion is used to store the conversion data for the election ids.
interface IConversion {
    "election_id": number;
    "option": string;
    "option_text": string;
    "selected_text": string;
}

// Returns type IConversion (i.e. JSON)
function convert<IConversion>(value: string) {
    let json = conversions.filter(
        function(data){ return data.option == value }
    );
    // console.log("Converted [" + value + "] to id:[" + json[0].election_id + "]");
    console.log("yeet", json[0]);
    return json[0];
}

////////////////////////////////////////
////////////// Components //////////////
////////////////////////////////////////

// <Elections> contains the election selector, overview, and contests.
export default function Elections() {
    // These states are declared and passed to useContext, overriding the default values.
    const [electionInfo, setElectionInfo] = useState("2023-nov");
        // TOTAL election info
    const [contestData, setContestData] = useState(new Array<IContest>());
    const [userId, setUserId] = useState(0);


    // Set for ALL retrieved election data
    const [eData, setEData] = useState(new Array<IElectionItem>);
    // The selected election, which by default, is the most current one that is populated
    const [selectedElection, setSelectedElection] = useState<IElectionItem | null>(null);



    // TODO: fetch json data from calling http://35.88.126.46/?longitude=0&latitude=0 here and set to contestData.json
    useEffect(() => { // Use useEffect to fetch data on component mount
        fetch('http://35.88.126.46/?longitude=0&latitude=0')
            .then(response => response.json())
            .then(data => {
                setEData(data);
                const validElections = eData.filter(election => election.contests.length > 0);
                const latestElection = validElections.reduce((prev, current) => (prev.election_id > current.election_id) ? prev : current, validElections[0]);
                if (latestElection.election_id !== null) {
                    setSelectedElection(latestElection); // TODO: remove this redundancy
                    setContestData(latestElection.contests);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [eData]); // Empty dependency array to run only once

    return (
        <div className="w-full">
            <ElectionInfoContext.Provider value={{electionInfo, setElectionInfo}}>
                <ElectionSelector />
                <ElectionOverview />
                {/* UserContext needs to be put somewhere else—namely, somewhere it can affect <Map> in /ballot. */}
                <UserContext.Provider value={{userId, setUserId}}> 
                    <ContestDataContext.Provider value={{contestData, setContestData}}>
                        <PinnedCandidates />
                        <Contests />
                    </ContestDataContext.Provider>
                </UserContext.Provider>
            </ElectionInfoContext.Provider>

        </div>
    );
};

// <ElectionOverview>
function ElectionOverview() {
    const { electionInfo, setElectionInfo } = useContext(ElectionInfoContext);

    let election = convert(electionInfo);
    useEffect(() => {
        election = convert(electionInfo);
    }, [electionInfo]);


    return (
        <div className="w-full">
            <div className="card flex p-8 gap-64 mt-4">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h4>Election Details</h4>
                        <h1>{election.title}</h1>
                        {/* TODO: Create a dictionary system, as referenced in this file's header. */}
                        <p className="mt-4">A general election and a special election are both types of elections, but they serve different purposes and occur under different circumstances.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button>Get registered</Button>
                        <Button>Find a ballot box</Button>
                    </div>
                </div>
                <div className="max-w-[500px] flex flex-col gap-6 p-6 rounded-md bg-background">
                    <h4>Dates & Deadlines</h4>
                    <ul className="flex flex-col gap-6">
                        <li className="flex">
                            <p className="w-24 font-600 shrink-0">April 5</p>
                            <p>Start of 18-day voting period (through Election Day). Ballots are mailed out and Accessible Voting Units (AVUs) are available at voting centers.</p>
                        </li>
                        <li className="flex">
                            <p className="w-24 font-600 shrink-0">April 15</p>
                            <p>Deadline for online & mail registration.</p>
                        </li>
                        <li className="flex">
                            <p className="w-24 font-600 shrink-0">April 23</p>
                            <p>Deposit your ballot in an official drop box by 8 p.m. on Election Day.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Pulls the election id from the ElectionInfoContext.
// TODO: use a combination of electionInfo and convert() to populate the options.
function ElectionSelector() {
    const { electionInfo, setElectionInfo } = useContext(ElectionInfoContext);

    return (
        <Select defaultValue={electionInfo} value={electionInfo} onValueChange={(value: string) => setElectionInfo(value)}>
          <SelectTrigger className="w-[277px]">
            <SelectValue aria-label={electionInfo} >
                {convert(electionInfo).selected_text}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>2023</SelectLabel>
              <SelectItem value="2023-nov">November General</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>2024</SelectLabel>
              <SelectItem value="2024-feb">February Special</SelectItem>
              <SelectItem value="2024-apr">April Special</SelectItem>
              <SelectItem value="2024-aug" disabled>August Primary</SelectItem>
              <SelectItem value="2024-nov" disabled>November General</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
    );
}





// Currently unused
export function ElectionWikiInfo() {
    return (
        // <p className="text-lg my-4">A general election and a special election are both types of elections, but they serve different purposes and occur under different circumstances.</p>
        <Dialog>
        <DialogTrigger asChild>
            <Button variant="subtle" className="self-center bg-[#947fee] text-white hover:text-black hover:bg-white">What’s the difference between a general and special election?</Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col w-[calc(100vw-2rem)] sm:w-[calc(100vw-8rem)] max-w-screen-sm max-h-[calc(100vh-4rem)] pr-0 bg-clip-border">
            <DialogHeader>
            <h3 className="mr-8">What’s the difference between a general and special election?</h3>
            </DialogHeader>

            <div className="items-stretch overflow-y-scroll pr-8">
            <p className="pr-8">A general election and a special election are both types of elections, but they serve different purposes and occur under different circumstances.</p>
            <ol className="styled pr-8">
                <li>
                <p className="font-500">General Election:</p>
                <ul className="styled">
                    <li>A general election is a regularly scheduled election that occurs at specified intervals, typically to elect representatives or officials for a specific period, such as four years.</li>
                    <li>It is a comprehensive election where voters choose candidates for various offices at the national, state, or local levels. This can include positions like the President, members of the legislature, governors, mayors, and other public officials.</li>
                    <li>General elections are usually held on a fixed schedule, as defined by the constitution or laws of a particular country or region. In many democracies, they are held at regular intervals, such as every four years.</li>
                </ul>
                </li>
                <li>
                <p className="font-500">Special Election:</p>
                <ul className="styled">
                    <li>A special election, on the other hand, is an unscheduled election that is called outside the regular election cycle. It is typically held to fill a vacant position or address a specific issue.</li>
                    <li>Special elections can be triggered by various reasons, such as the death, resignation, or removal of an elected official before their term is completed. They can also be called to decide on specific matters like a proposed change to the constitution or a specific policy issue.</li>
                    <li>The timing and rules for special elections vary by jurisdiction and are often defined by laws or the constitution.</li>
                </ul>
                </li>
            </ol>
            <div className="mt-8 flex flex-col text-secondary italic pr-4">
                <small>Generated and proofread with ChatGPT on Dec 30, 2023.</small>
                <small>Prompt: “What’s the difference between a general and special election?”</small>
                <small>Learn more about ClearVote’s philosophy on AI here.</small>
            </div>
            </div>
        </DialogContent>
        </Dialog>
    );
}
