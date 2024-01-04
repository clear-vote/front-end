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
      <section className="m-8 flex flex-col">
        <h3 className="mb-1">Button variants</h3>

        <div className="flex flex-row gap-2 mb-2">
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="subtle" size="sm">Subtle</Button>
          <Button variant="outline" size="sm">Outline</Button>
          <Button variant="ghost" size="sm">Ghost</Button>
          <Button variant="destructive" size="sm">Destructive</Button>
          <Button variant="link" size="sm">Link</Button>
        </div>

        <div className="flex flex-row gap-2 mb-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>

        <div className="flex flex-row gap-2 mb-2">
          <Button variant="primary" size="lg">Primary</Button>
          <Button variant="secondary" size="lg">Secondary</Button>
          <Button variant="subtle" size="lg">Subtle</Button>
          <Button variant="outline" size="lg">Outline</Button>
          <Button variant="ghost" size="lg">Ghost</Button>
          <Button variant="destructive" size="lg">Destructive</Button>
          <Button variant="link" size="lg">Link</Button>
        </div>
      </section>
    </main>
  )
}
