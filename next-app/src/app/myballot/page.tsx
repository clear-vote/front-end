import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LocationPicker from '@/components/custom/locationpicker'
import DateCard from '@/components/custom/datecard'
import Contests from '@/components/custom/contests'

export default function MyBallotPage() {
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
          <Button variant="subtle" className="self-center">What’s the difference between a general and special election?</Button>
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
            <div className="mt-4 flex flex-col gap-4">
              <Contests />
              <Contests />
              <Contests />
            </div>
          </TabsContent>
          <TabsContent value="court-of-appeals">
            <p>Showing contests for:</p>
            <h4>Court of Appeals, Division No. 1, District No. 1</h4>
            <div className="mt-4 flex flex-col gap-4">
              <Contests />
            </div>
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