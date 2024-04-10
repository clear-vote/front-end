import Link from 'next/link'
import ScrollUp from '@/lib/scrollup'
import { Button } from "@/components/ui/button"
import { SearchInput } from '@/components/custom/search-input'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const KING_COUNTY: string = [-122.515967, 47.096484, -121.333360, 47.734145].join(',');
const MAX_RESULTS: number = 5;

export default function Home() {

  return (
    <main className="min-h-screen pt-32 flex flex-col items-center background_home">
      <ScrollUp />
      <section className="w-full max-w-lg text-center flex flex-col items-center">
        <h1 className="text-white">Welcome to</h1>
        <div className="flex justify-center">
          <Image
            src="/full-banner-plain-cropped.svg"
            width={275}
            height={275}
            alt="clearvote logo"
            className="z-10 py-2"
          />
        </div>
        <p className="text-lg mt-2 text-white">Stay up-to-date during local, off-cycle elections.</p>
        <p className="text-lg mt-2 text-white">Understand who you are voting for.</p>
      </section>
      <section className="w-full max-w-lg flex flex-col items-center pt-16 gap-4">
        <SearchInput
          type="search"
          placeholder="Enter an address..."
          className="w-full"
          token={process.env.MAPBOX_TOKEN}
          bounds={KING_COUNTY}
          maxResults={MAX_RESULTS}
        />
        <div className="w-full flex items-center gap-2">
          <Separator className="grow shrink" />
          <small>OR</small>
          <Separator className="grow shrink" />
        </div>
        <Button variant="subtle" className="bg-[#947fee] text-white hover:text-black hover:bg-white" asChild>
          <Link href="/ballot">See Example<FontAwesomeIcon icon={faPlay} className="ml-2" /></Link>
        </Button>
      </section>
    </main>
  )
}
