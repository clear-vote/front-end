import Image from 'next/image'
import { Button } from "@/components/ui/button"
import LocationPicker from '@/components/custom/locationpicker'

export default function MyBallotPage() {
  return (
    <main className="min-h-screen mt-32 flex flex-col gap-16 items-center">
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

        <div className="mt-8 flex flex-col gap-2 text-center">
          <p className="text-lg font-600 text-disabled-foreground">Upcoming Election</p>
          <h1>November General and Special Election</h1>
          <p className="text-lg my-6">A general election and a special election are both types of elections, but they serve different purposes and occur under different circumstances.</p>
          <Button variant="subtle" className="self-center">What’s the difference between a general and special election?</Button>
        </div>

      </section>
    </main>

  )}