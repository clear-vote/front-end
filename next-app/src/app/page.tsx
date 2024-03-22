import Link from 'next/link'
import ScrollUp from '@/lib/scrollup'
import { Button } from "@/components/ui/button"
import { SearchInput } from '@/components/custom/search-input'
import { Separator } from "@/components/ui/separator"

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const KING_COUNTY: string = [-122.515967, 47.096484, -121.333360, 47.734145].join(',');
const MAX_RESULTS: number = 5;

export default function Home() {

  return (
    <main className="min-h-screen mt-32 flex flex-col items-center">
      <ScrollUp />
      <section className="w-full max-w-lg text-center">
        <h1>Welcome to Clearvote</h1>
        <p className="text-lg mt-2">Stay up-to-date during local, off-cycle elections and understand who you are voting for.</p>
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
        <Button variant="subtle" asChild>
          <Link href="/myballot">See Example<FontAwesomeIcon icon={faPlay} className="ml-2" /></Link>
        </Button>
      </section>
    </main>
  )
}
