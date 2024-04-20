'use client'
import { createContext, useContext, useState, Dispatch, SetStateAction, useEffect, use } from 'react';

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

import DateCard from "./date-card"
import Contests from "./contests"
import contestData from '@/lib/data/contestData.json'
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
///     • Also consider creating a "dictionary" file, which can be used to populate election descriptions.
/// • Use conversions to populate options in <ElectionSelector>
/// • Use conversions to populate <ElectionOverview> (Dates & Deadlines)
/// • *Update buttons in <ElectionOverview> to link to the correct pages.
/// • Stop sitebar from changing width when <ElectionSelector> is clicked.
/// ============================================


///////////////////////////////////////
//////////////// Utils ////////////////
///////////////////////////////////////

// ElectionContext is used to store the current election id as a context.
// A context is similar to useState(), but it is global and can be accessed by any child component. This makes for cleaner code.
interface IElectionContext {
    curElection: string;
    setCurElection: Dispatch<SetStateAction<string>>;
}

const ElectionContext = createContext<IElectionContext>({
    curElection: "2023-nov",
    setCurElection: () => {},
});



// IConversion is used to store the conversion data for the election ids.
interface IConversion {
    "election_id": number;
    "option": string;
    "option_text": string;
    "selected_text": string;
}

function convert<IConversion>(value: string) {
    let json = conversions.filter(
        function(data){ return data.option == value }
    );
    // console.log("Converted [" + value + "] to id:[" + json[0].election_id + "]");
    return json[0];
}



////////////////////////////////////////
////////////// Components //////////////
////////////////////////////////////////

// <Elections> contains the election selector, overview, and contests.
export default function Elections() {
    const [curElection, setCurElection] = useState("2023-nov");

    return (
        <div className="w-full">
            <ElectionContext.Provider value={{curElection, setCurElection}}>
                <ElectionSelector />
                <ElectionOverview />
                {/* <Contests
                    contest_data={contestData}
                    election_id={lastClickedId}
                /> */}
            </ElectionContext.Provider>

        </div>
    );
};

// <ElectionOverview>
function ElectionOverview() {
    const { curElection, setCurElection } = useContext(ElectionContext);

    let election = convert(curElection);
    useEffect(() => {
        election = convert(curElection);
    }, [curElection]);


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

function ElectionSelector() {
    const { curElection, setCurElection } = useContext(ElectionContext);

    return (
        <Select defaultValue={curElection} value={curElection} onValueChange={(value: string) => setCurElection(value)}>
          <SelectTrigger className="w-[277px]">
            <SelectValue aria-label={curElection} >
                {convert(curElection).selected_text}
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
