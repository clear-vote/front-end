import Image from 'next/image'
import ScrollUp from '@/components/scrollup'
import { Button } from "@/components/ui/button"
import { SearchInput } from '@/components/ui/searchinput'
import { Separator } from "@/components/ui/separator"

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


// import chilis from '../assets/chilis.gif'

export default function Home() {
  return (
    <main className="min-h-screen mt-32 flex flex-col items-center">
      <ScrollUp/>
      <section className="w-full max-w-lg text-center">
        <h1>Welcome to ClearVote</h1>
        <p className="text-lg mt-2">Stay up-to-date during local, off-cycle elections and understand who you are voting for.</p>
      </section>
      <section className="w-full max-w-lg flex flex-col items-center pt-16 gap-4">
        <SearchInput type="search" placeholder="Enter your voting address..." className="w-full " />
        <div className="w-full flex items-center gap-2">
          <Separator className="grow shrink" />
          <small>OR</small>
          <Separator className="grow shrink" />
        </div>
        <Button variant="subtle">See Example <FontAwesomeIcon icon={faPlay} className="ml-2" /> </Button>
      </section>
    </main>
  )
}
