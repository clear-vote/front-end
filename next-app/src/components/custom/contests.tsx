import { ReactNode } from 'react'
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

type ContestProps = {
 key: number
 title: string
 title_desc: string
 term_length: string
//  candidates: Array<CandidateProps>
 children: ReactNode
}

export type CandidateProps = {
 key: number
 name: string
 image_source: string
 pfms: Array<PfmProps>
}

// Returns a <div> containing a list of <Contest/> components, each of which contains a list of <CandidateCard/> components
export default async function Contests() {
 const file = await fs.readFile(process.cwd() + '/src/lib/contests.json', 'utf8');
 const contestsData = JSON.parse(file);

// Creates a <div> containing <Contest/> components, which are mapped from contestsData
 const contests = contestsData.map(
     (contest: any) => <Contest
   key={contest.key}
   title={contest.title}
   title_desc={contest.title_desc}
   term_length={contest.term_length}
  >
     <div className="w-full flex gap-4 p-8">
        {getCandidates(contest.candidates)}
     </div>
  </Contest>
 );

 return (
  <div className="mt-4 flex flex-col gap-4">{contests}</div>
 );
}


// Returns a <CandidateCard/>, using passed data from contestsData
function getCandidates(candidates: Array<CandidateProps>) {
     return candidates.map(
      candidate => (
        <CandidateCard
           key={candidate.key}
           name={candidate.name}
           image_source={candidate.image_source}
           pfms={candidate.pfms}
        />
      )
     );
    }

function Contest(props: ContestProps) {
     return (
      <div className="flex-none bg-card elevation-1 border border-1 rounded-lg flex overflow-x-scroll">
       <div className="border-border border-r flex flex-col p-6 justify-between w-2/5">
         <div className="flex flex-col gap-3">
            <h3>{props.title}</h3>
            <p className="text-secondary">{props.title_desc}</p>
         </div>
         <Button variant="outline" className="self-start">Learn more</Button>
       </div>
       {props.children}
      </div>
     )
    }
    
    function CandidateCard(props: CandidateProps) {
     const pfms = props.pfms.map(pfm => <PfmBadge key={pfm.key} name={pfm.name} value={pfm.value} />);
    
     return (
      <Dialog>
       <DialogTrigger>
         <div className="flex-none bg-card hover:bg-neutral-100 elevation-1 border border-1 rounded-lg p-6 flex flex-col gap-0 items-start max-w-[calc(200px+1.5rem)]">
            <Image
                 src={props.image_source}
                 alt="candidate headshot"
                 height={200}
                 width={200}
                 className="border rounded-sm mb-4"
            />
            <p className="text-lg font-600">{props.name}</p>
            <p>electjohnwilson.com</p>
         </div>
       </DialogTrigger>
       <DialogContent className="flex flex-col w-[calc(100vw-2rem)] sm:w-[calc(100vw-8rem)] max-w-screen-sm max-h-[calc(100vh-4rem)] pr-0 bg-clip-border">
         <div className="items-stretch overflow-y-scroll pt-16 pr-8">
            <div className="bg-slate-300 w-full h-16 fixed top-0 left-0 z-0"></div>
            <Image
                 src={props.image_source}
                 alt="candidate headshot"
                 height={144}
                 width={144}
                 className="border rounded-sm mb-4"
            />
            <h2>John Wilson</h2>
            <p className="text-lg">Running for City of Seattle Council District No. 4</p>
            <div className="flex gap-8 mt-4 w-full">
                 <div className="flex flex-col py-3 px-4 bg-muted rounded-lg grow">
                         <p className="font-500">Campaign Website</p>
                         <p>www.electjohnwilson.com</p>
                 </div>
                 <div className="flex flex-col py-3 px-4 bg-muted rounded-lg grow">
                         <p className="font-500">Contact</p>
                         <p>info@wilson4assessor.com</p>
                 </div>
            </div>
            <h4 className="mt-8">Statement</h4>
            <p className="mt-2">When King County voters elected me, I promised to be an &quot;activist Assessor.&quot; I have been. We have fought to protect senior homeowners from soaring values, make it easier to get your refund, and see how much that ballot measure is going to cost.<br /><br />
                 But more should be done. That&apos;s why I am asking for your vote again.<br /><br />
                 I&apos;ll fight for a truly fair and equitable property tax system. We&apos;re in a housing crisis. Housing affordability threatens everyone – whether homeowners, seniors, renters or small business owners. Our homeless crisis leaves women and children to sleep out on the street because there is no room in the shelter.<br /><br />
                 An &quot;activist&quot; Assessor can help. We&apos;ve gone twice to Olympia to reform the senior and disabled property tax relief program. Now thousands of our neighbors can stay in their homes.<br /><br />
                 Responding to our homelessness crisis, we found surplus public and vacant private property, which can be used for housing solutions. We have identified the land. We should put it to use.<br /><br />
                 The housing shortage makes homes and apartments in King County so expensive. Smarter density can bring us more housing at a more affordable price. But our property tax system was never designed to handle annual assessed value increases of up to just over 50%. And while actual taxes, including those voter approved, are considerably less, in these inflationary times it literally hits home. I&apos;ve been a tireless taxpayer champion. Homeowners, renters, and small businesses deserve a tax break. I&apos;m working with Assessors statewide to save everyday people real money without gutting vital local services. I am proud to be endorsed by Democrats and Republicans, labor and business, and folks in Seattle and the suburbs. While much has been done, we must do more. I ask for your vote.</p>
    
            <div className="mt-8 flex flex-col text-secondary italic pr-4">
                 <small>Retrieved from info.kingcounty.gov on Jan 30, 2024.</small>
                 <small className="mt-4">ClearVote does not correct punctuation, grammar, or fact check candidate and measure statements.</small>
            </div>
         </div>
    
       </DialogContent>
      </Dialog>
     )
    }






