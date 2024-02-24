'use client';

import { ReactNode } from 'react'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { promises as fs } from 'fs';
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { PfmBadge, PfmProps } from './pfmBadge'
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog"

interface PositionInfo {
     boundary_type: string;
     title_string: string;
     title_info: string;
     title_description: string;
     area_name: string;
     district_char: string | null;
     position_char: string | null;
}
   
interface Contest {
     position_info: PositionInfo;
     candidate_info: Candidate[]; // Define this more precisely based on your actual data structure
}

interface Candidate {
     name: string;
     image: string;
     website: string
     education: string;
     occupation: string;
     statement: string;
     statement_source: string;
     pfms: any[];
     politigram_quotes: any[];
}
   
interface ElectionItem {
     election_id: number;
     election_type: string;
     voting_start: number;
     register_by: number;
     voting_end: number;
     contests: Contest[];
}
   
interface ContestProps {
     contest_data: ElectionItem[];
     election_id: number;
     congressional_district: string;
     legislative_district: string;
     county: string;
     county_district: string;
     city: string;
     city_district: string;
     school_district: string;
}

const Contests = ({
     contest_data,
     election_id,
     congressional_district,
     legislative_district,
     county,
     county_district,
     city,
     city_district,
     school_district,
   }: ContestProps) => {
     const [contests, setContests] = useState<Contest[]>([]);
   
     useEffect(() => {
          const fetchContests = async () => {
               try {
                    const filteredContests = contest_data
                         .filter((item: ElectionItem) => item.election_id === election_id)
                         .flatMap((item: ElectionItem) => item.contests)
                         .filter((contest: Contest) => {
                              const { position_info } = contest;
                              const { boundary_type, area_name, district_char } = position_info;
                              return (
                                   (boundary_type === 'congressional' && district_char === congressional_district) ||
                                   (boundary_type === 'legislative' && district_char === legislative_district) ||
                                   (boundary_type === 'county' && area_name.toLowerCase() === county.toLowerCase()) ||
                                   (boundary_type === 'county council' && district_char === county_district) ||
                                   (boundary_type === 'city' && area_name.toLowerCase() === city.toLowerCase()) ||
                                   (boundary_type === 'city council' && district_char === city_district) ||
                                   (boundary_type === 'school district' && district_char === school_district)
                              );
                         });
                    setContests(filteredContests);
               } catch (error) {
                    console.error("Failed to load contests", error);
               }
           };
         
           fetchContests();
     }, [contest_data, election_id, congressional_district, legislative_district, county, county_district, city, city_district, school_district]);
   
     // Ensure the component correctly handles rendering of contests
     return (
       <div>
         {contests.map((contest, index) => (
           <div key={index} className="contest-item">
             <h3>{contest.position_info.area_name} {contest.position_info.title_string}
             {contest.position_info.district_char ? ` district number ${contest.position_info.district_char}` : ''}
             {contest.position_info.position_char ? ` position number ${contest.position_info.position_char}` : ''}</h3>
             {contest.candidate_info ? contest.candidate_info.map((candidate, candidateIndex) => (
               <CandidateCard key={candidateIndex} {...candidate} />
             )) : <p>No candidates available.</p>}
           </div>
         ))}
       </div>
     );
   };
   
export default Contests;
    
export function CandidateCard(props: Candidate) {
     return (
          <Dialog>
          <DialogTrigger>
          <div className="flex-none bg-card hover:bg-neutral-100 elevation-1 border border-1 rounded-lg p-6 flex flex-col gap-0 items-start max-w-[calc(200px+1.5rem)]">
               {/* Use a conditional rendering to check if the image URL is from an unconfigured host */}
               <Image
                    src={props.image}
                    alt="candidate headshot"
                    height={200}
                    width={200}
                    className="border rounded-sm mb-4"
                    unoptimized={props.image.startsWith('https://info.kingcounty.gov')}
               />
               <p className="text-lg font-600">{props.name}</p>
               <p>{props.website}</p>
          </div>
          </DialogTrigger>
          <DialogContent className="flex flex-col w-[calc(100vw-2rem)] sm:w-[calc(100vw-8rem)] max-w-screen-sm max-h-[calc(100vh-4rem)] pr-0 bg-clip-border">
          <div className="items-stretch overflow-y-scroll pt-16 pr-8">
               <div className="bg-slate-300 w-full h-16 fixed top-0 left-0 z-0"></div>
               {/* Repeat the conditional rendering for the detailed image */}
               <Image
                    src={props.image}
                    alt="candidate headshot"
                    height={144}
                    width={144}
                    className="border rounded-sm mb-4"
                    unoptimized={props.image.startsWith('https://info.kingcounty.gov')}
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





