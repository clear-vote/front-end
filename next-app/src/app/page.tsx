import Image from 'next/image'
import { Button } from "@/components/ui/button"
import SiteBar from '@/components/ui/sitebar'


// import chilis from '../assets/chilis.gif'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteBar />
      <section className="flex flex-col items-center pt-16">
        <div className="max-w-lg">
          <Image
              src="/chilis.gif"
              width={1200}
              height={1200}
              alt="hi and welcome to chilis"
            />
          <h1 className="text-3xl font-semibold my-8">Hi, welcome to chilis</h1>
          <Button>
            <a href="https://www.youtube.com/watch?v=bs53JQTuEc0" target="_blank">Yabba dabba doo</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
