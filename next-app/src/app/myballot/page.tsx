
import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image'
import { kv } from "@vercel/kv";
import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LocationPicker from '@/components/custom/location-picker'
import DateCard from '@/components/custom/date-card'
import { Contest, CandidateCard, CandidateProps } from '@/components/custom/contests'
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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import '@/lib/contests.json'


type ContestProps = {
  key: number
  title: string
  title_desc: string
  term_length: string
  candidates: Array<CandidateProps>
}

function getContests(contestsData: Array<ContestProps>) {
  const allContests = [
    {
      "key": 1,
      "title": "Assessor",
      "title_desc": "Responsible for assessing the value of property within a county for taxation purposes.",
      "term_length": "3 year term",
      "candidates": [
        {
          "key": 1,
          "name": "Tony Hawk",
          "image_source": "https://qpdth9z67y9awut8.public.blob.vercel-storage.com/frank.png",
          "website": "google.com",
          "education": "Masters in Skateboarding from UW",
          "occupation": "Skateboarding Mogul",
          "statement": "I love to skate. Yee-haw",
          "statement_source": "King County voter pamphlet",
          "pfms": [
            {
              "key": 1,
              "name": "Business",
              "value": 13,
            },
            {
              "key": 2,
              "name": "Zoning",
              "value": 12,
            },
            {
              "key": 3,
              "name": "Reformed Courts",
              "value": 22,
            },
          ],
        },
      ],
    },
    {
      "key": 2,
      "title": "Director of Elections",
      "title_desc": "Responsible for overseeing and managing the electoral process at the county level.",
      "term_length": "3 year term",
      "candidates": [
        {
          "key": 43125,
          "name": "Julie Wise",
          "image_source": "https://qpdth9z67y9awut8.public.blob.vercel-storage.com/jasmine.png",
          "pfms": [
            {
              "key": 54325,
              "name": "Business",
              "value": 13,
            },
            {
              "key": 22897,
              "name": "Zoning",
              "value": 12,
            },
            {
              "key": 357832,
              "name": "Reformed Courts",
              "value": 22,
            },
          ],
        },
        {
          "key": 3,
          "name": "Doug Basler",
          "image_source": "https://qpdth9z67y9awut8.public.blob.vercel-storage.com/jordan.png",
          "pfms": [
            {
              "key": 423,
              "name": "Security",
              "value": 18,
            },
            {
              "key": 43,
              "name": "Transit",
              "value": 12,
            },
            {
              "key": 55,
              "name": "Infrastructure",
              "value": 22,
            },
          ],
        },
      ],
    },
    {
      "key": 3,
      "title": "Council District No.2",
      "title_desc": "Responsible for making policies, passing ordinances, and overseeing the administration of various county functions",
      "term_length": "3 year term",
      "candidates": [
        {
          "key": 321,
          "name": "Girmay Zahilay",
          "image_source": "https://qpdth9z67y9awut8.public.blob.vercel-storage.com/eddie.png",
          "pfms": [
            {
              "key": 5999,
              "name": "Business",
              "value": 13,
            },
            {
              "key": 2321333,
              "name": "Zoning",
              "value": 12,
            },
            {
              "key": 342,
              "name": "Reformed Courts",
              "value": 22,
            },
          ],
        },
      ],
    },
  ];

  const contests = contestsData.map(
  // const contests = allContests.map(
    contest => <Contest 
      key={contest.key}
      title={contest.title}
      title_desc={contest.title_desc}
      term_length={contest.term_length}
      children={
        <div className="w-full flex gap-4 p-8">
          {getCandidates(contest.candidates)}
        </div>
      }
    /> 
  );

  function getCandidates(candidates: Array<CandidateProps>) {
    return candidates.map(
      candidate => (
        <CandidateCard 
          key={candidate.key}
          name={candidate.name}
          image_source={candidate.image_source}
          pfms={candidate.pfms}
        />
        // <Dialog>
        //   <DialogTrigger>
        //     <CandidateCard 
        //       key={candidate.key}
        //       name={candidate.name}
        //       image_source={candidate.image_source}
        //       pfms={candidate.pfms}
        //     />
        //   </DialogTrigger>
        //   <DialogContent>
        //     <DialogHeader>
        //       <DialogTitle>Are you absolutely sure?</DialogTitle>
        //       <DialogDescription>
        //         This action cannot be undone. This will permanently delete your account
        //         and remove your data from our servers.
        //       </DialogDescription>
        //     </DialogHeader>
        //   </DialogContent>
        // </Dialog>
      )
    );
  }

  return (<div className="mt-4 flex flex-col gap-4">{contests}</div>);
}

export default async function MyBallotPage() {
  const file = await fs.readFile(process.cwd() + '/src/lib/contests.json', 'utf8');
  const contestsData = JSON.parse(file);
  
  return (
    <main className="min-h-screen my-32 flex flex-col gap-16 items-center">
      <section className="max-w-[660px] flex flex-col gap-6 items-center">
        <Image 
          src="/temp-map.png"
          alt="map view of Seattle"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />

        <div className="max-w-[500px] w-full" >
          <LocationPicker />
        </div>

        <div className="my-8 flex flex-col gap-2 text-center">
          <p className="text-lg font-600 text-disabled-foreground">Upcoming Election</p>
          <h1>November General and Special Election</h1>
          <p className="text-lg my-4">A general election and a special election are both types of elections, but they serve different purposes and occur under different circumstances.</p>
          {/* <Button variant="subtle" className="self-center"></Button> */}
          {/* <DialogButton buttonText="What’s the difference between a general and special election?"></DialogButton> */}

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="subtle" className="self-center">What’s the difference between a general and special election?</Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col w-[calc(100vw-2rem)] sm:w-[calc(100vw-8rem)] max-w-screen-sm max-h-[calc(100vh-4rem)]">
              <DialogHeader>
                <h3 className="mr-8">What’s the difference between a general and special election?</h3>
              </DialogHeader>
                
              <div className="items-stretch overflow-y-scroll">
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

          {/* <Drawer>
            <DrawerTrigger asChild>
              <Button variant="subtle" className="self-center">What’s the difference between a general and special election?</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <h3 className="mr-8">What’s the difference between a general and special election?</h3>
              </DrawerHeader>
              <p>A general election and a special election are both types of elections, but they serve different purposes and occur under different circumstances.</p>
              <ol className="styled">
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
              <div className="mt-8 flex flex-col text-secondary italic">
                <small>Generated and proofread with ChatGPT on Dec 30, 2023.</small>
                <small>Prompt: “What’s the difference between a general and special election?”</small>
                <small>Learn more about ClearVote’s philosophy on AI here.</small>
              </div>
            </DrawerContent>
          </Drawer> */}
          
        </div>
        
        <div className="w-full">
          <h3>Dates and Deadlines</h3>
          <div className="scrolling-wrapper overflow-x-scroll py-4">
            <div className="flex flex-nowrap gap-4">
              <DateCard />
              <DateCard />
              <DateCard />
            </div>
          </div>
        </div>
      </section>


      <section className="max-w-[1200px] w-[calc(100%-8rem)]">
        <Separator />
        <h2 className="mt-8 mb-4">On your ballot...</h2>
        <Tabs defaultValue="county">
          <TabsList className="mb-4">
            <TabsTrigger value="county">County</TabsTrigger>
            <TabsTrigger value="court-of-appeals">Court of Appeals</TabsTrigger>
            <TabsTrigger value="port-of-seattle">Port of Seattle</TabsTrigger>
            <TabsTrigger value="city">City</TabsTrigger>
            <TabsTrigger value="school">School</TabsTrigger>
          </TabsList>
          <TabsContent value="county">
            <p>Showing contests for:</p>
            <h4>King County</h4>
            {getContests(contestsData)}
          </TabsContent>
          <TabsContent value="court-of-appeals">
            <p>Showing contests for:</p>
            <h4>Court of Appeals, Division No. 1, District No. 1</h4>
            Lorem ipsum
          </TabsContent>
          <TabsContent value="port-of-seattle">
            Lorem ipsum
          </TabsContent>
          <TabsContent value="city">
            Lorem ipsum
          </TabsContent>
          <TabsContent value="school">
            Lorem ipsum
          </TabsContent>
        </Tabs>
      </section>
    </main>

  )}