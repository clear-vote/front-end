'use client'

import React, { useContext } from 'react';
import Image from 'next/image'
import {
     Dialog,
     DialogContent,
     DialogTrigger,
} from "@/components/ui/dialog"
import { ElectionInfoContext, IElectionItem } from '@/components/custom/elections'; // Import the ElectionInfoContext
import { Button } from '@/components/ui/button';


/// ============================================
/// Summary
/// 
///
/// Remarks
/// • 
/// 
/// TODOs
/// • This component should useContext for the filtered data. This way, re-rendering is triggered from elections.tsx.
/// • 
/// ============================================




const defaultCoords: number[] = [-122.3076595, 47.654538] // TODO: should be an export

export interface IContest {
     position_info: IPositionInfo;
     candidate_info: ICandidate[]; // Define this more precisely based on your actual data structure
}

export interface IPositionInfo {
     boundary_type: string;
     title_string: string;
     area_name: string;
     district_char: string | null;
     position_char: string | null;
}

export interface ICandidate {
     name: string | null;
     image: string | null;
     email: string | null;
     website: string | null;
     education: string | null;
     occupation: string | null;
     statement: string | null;
     statement_source: string | null;
     pfms: any[] | null;
     politigram_quotes: any[] | null;
}

export default function Contests() {
     const { electionData, selectedElectionId } = useContext(ElectionInfoContext);
     // Ensure the component correctly handles rendering of contests

     // Ensure electionData is loaded and not empty
     if (!electionData || electionData.length === 0) {
          return <div>Loading...</div>; // Or any other placeholder content
     }
     
     // Filter the election data to find the matching election
     const filteredElections = electionData.filter(election => election.election_id === selectedElectionId);
     
     // Check if there is at least one election that matches the selected ID
     if (filteredElections.length === 0 || !filteredElections[0].contests) {
          return <div>No contests found for the selected election.</div>;
     }
     
     const contestData = filteredElections[0].contests;
     
     return (
          <div className="flex flex-col gap-8">
               {contestData.map((contest, index) => (
                    <div key={index} className="contest-item lex-none bg-card elevation-1 border border-1 rounded-lg flex overflow-x-scroll">
                         <div className="border-border border-r flex flex-col p-6 justify-between w-2/5">
                              <div className="flex flex-col gap-3">
                                   <h3 className="">{contest.position_info.area_name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} {contest.position_info.title_string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                        {contest.position_info.district_char ? ` District Number ${contest.position_info.district_char}` : ''}
                                        {contest.position_info.position_char ? ` Position Number ${contest.position_info.position_char}` : ''}</h3>
                         
                              </div>
                              <Button variant="outline" className="self-start" disabled={true}>Learn more</Button>
                         </div>

                         {contest.candidate_info ?
                              <div style={{ display: 'flex', overflowX: 'auto', maxWidth: '100%' }}>
                                   {contest.candidate_info.map((candidate, candidateIndex) => (
                                        <div className="m-3" key={candidateIndex}>
                                             <CandidateCard {...candidate} />
                                        </div>
                                   ))}
                              </div>
                              : <p>No candidates available.</p>
                         }
                    </div>
               ))}
          </div>
          
     );
}


export function CandidateCard(props: ICandidate) {
     return (
          <Dialog>
               <DialogTrigger>
                    <div className="flex-none bg-card hover:bg-neutral-100 elevation-1 border border-1 rounded-lg p-6 flex flex-col gap-0 items-start max-w-[calc(200px+1.5rem)]">
                         {/* Use a conditional rendering to check if the image URL is from an unconfigured host */}
                         <Image
                              src={props.image || ''}
                              alt="candidate headshot"
                              height={200}
                              width={200}
                              className="border rounded-sm mb-4"
                              unoptimized={!!(props.image && props.image.startsWith('https://info.kingcounty.gov'))}
                         />
                         <p className="text-lg font-600">{props.name}</p>
                         <p className="lowercase overflow-hidden whitespace-nowrap w-[150px] truncate">{props.website}</p>
                    </div>
               </DialogTrigger>
               <DialogContent className="flex flex-col w-[calc(100vw-2rem)] sm:w-[calc(100vw-8rem)] max-w-screen-sm max-h-[calc(100vh-4rem)] pr-0 bg-clip-border">
                    <div className="items-stretch overflow-y-scroll pt-16 pr-8">
                         <div className="bg-slate-300 w-full h-16 fixed top-0 left-0 z-0"></div>
                         {/* Repeat the conditional rendering for the detailed image */}
                         <Image
                              src={props.image || ''} // Use an empty string as a default value if props.image is null
                              alt="candidate headshot"
                              height={200}
                              width={200}
                              className="border rounded-sm mb-4"
                              unoptimized={!!(props.image && props.image.startsWith('https://info.kingcounty.gov'))}
                         />
                         <h2>{props.name}</h2>
                         <div className="flex gap-8 mt-4 w-full">
                              <div className="flex flex-col py-3 px-4 bg-muted rounded-lg grow">
                                   <p className="font-500">Campaign Website</p>
                                   <p>{props.website}</p>
                              </div>
                         </div>
                         <h4 className="mt-8">Education</h4>
                         <p className="mt-2">{props.education}</p>
                         <h4 className="mt-8">Occupation</h4>
                         <p className="mt-2">{props.occupation}</p>
                         <h4 className="mt-8">Statement</h4>
                         <p className="mt-2">{props.statement}</p>

                         <div className="mt-8 flex flex-col text-secondary italic pr-4">
                              <small>Retrieved from {props.statement_source}</small>
                              {/* TODO: implement retrieval date */}
                              <small className="mt-4">ClearVote does not correct punctuation, grammar, or fact check candidate and measure statements.</small>
                         </div>
                    </div>

               </DialogContent>
          </Dialog>
     )
}