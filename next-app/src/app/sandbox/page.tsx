import Image from 'next/image'
import ScrollUp from '@/lib/scrollup'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SiteBar from '@/components/custom/sitebar'
import { SearchInput } from '@/components/custom/search-input'
import { Mail } from "lucide-react"


export default function Sandbox() {
  return (
    <main className="min-h-screen mt-32 flex flex-col gap-16 items-center">
      <ScrollUp/>
      <section className="w-full max-w-2xl bg-card border rounded-md overflow-hidden flex flex-col items-center">
        <Image
            src="/chilis.gif"
            width={1200}
            height={1200}
            alt="hi and welcome to chilis"
            className="object-cover"
          />
        <div className="mb-4 w-[calc(100%-2rem)] flex flex-col items-center">
          <h1 className="text-3xl font-semibold my-8">Hi, welcome to chilis</h1>
          <Button size="lg">
            <a href="https://www.youtube.com/watch?v=bs53JQTuEc0" target="_blank">Yabba dabba doo</a>
          </Button>
        </div>
      </section>

      <section className="bg-card border rounded-md w-full max-w-2xl p-8">
        <Input type="search" placeholder="Search" className="mb-2" />
        <SearchInput type="search" placeholder="Search" />
      </section>

      <section className="my-32 w-full max-w-2xl">
          <h3 className="mb-1">Button variants</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>sm</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-row gap-2 mb-2">
                  <Button variant="primary" size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                  <Button variant="subtle" size="sm">Subtle</Button>
                  <Button variant="outline" size="sm">Outline</Button>
                  <Button variant="ghost" size="sm">Ghost</Button>
                  <Button variant="destructive" size="sm">Destructive</Button>
                  <Button variant="link" size="sm">Link</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>md</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-row gap-2 mb-2">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="subtle">Subtle</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>lg</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-row gap-2 mb-2">
                  <Button variant="primary" size="lg">Primary</Button>
                  <Button variant="secondary" size="lg">Secondary</Button>
                  <Button variant="subtle" size="lg">Subtle</Button>
                  <Button variant="outline" size="lg">Outline</Button>
                  <Button variant="ghost" size="lg">Ghost</Button>
                  <Button variant="destructive" size="lg">Destructive</Button>
                  <Button variant="link" size="lg">Link</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </section>
    </main>

  )}