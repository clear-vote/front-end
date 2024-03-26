import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator'
import LocationPicker from '@/components/custom/location-picker'
import DateCard from '@/components/custom/date-card'
import Map from '@/components/custom/map'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Suspense } from 'react'
import Elections from '@/components/custom/elections'

interface Coordinates {
  lat: string | undefined;
  lng: string | undefined;
}

export const defaultCoords: number[] = [-122.3076595, 47.654538] // University of Washington

export default function MyBallotPage({ searchParams }: { searchParams: Coordinates }) {

  return (
    <main className="min-h-screen py-32 flex flex-col gap-16 items-center bg-gradient-to-r from-[#FFA59E] to-[#CBAFEF]">
      <section className="max-w-[660px] flex flex-col gap-6 items-center">
        <Suspense>
          <Map
            token={process.env.MAPBOX_TOKEN}
          />
        </Suspense>
        <div className="max-w-[500px] w-full" >
          {/* <LocationPicker />  TODO: implement */}
        </div>

        <div className="my-8 flex flex-col gap-2 text-center text-white">
          <p className="text-lg font-600 text-disabled-foreground text-white">Upcoming Election</p>
          <h1>November General and Special Election</h1>
          <p className="text-lg my-4">A general election and a special election are both types of elections, but they serve different purposes and occur under different circumstances.</p>

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

        </div>

      </section>


      <section className="max-w-[1200px] w-[calc(100%-8rem)]">
        <Elections />
      </section>
    </main>
  )
}
