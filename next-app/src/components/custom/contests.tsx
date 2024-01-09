'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'

export default function Contests() {


  return (
    <div className="flex-none bg-card elevation-1 border border-1 rounded-lg flex">
      <div className="border-border border-r flex flex-col p-6 justify-between h-[400px] w-2/5">
        <div className="flex flex-col gap-3">
          <h3>Assessor</h3>
          <div className="flex gap-1 flex-wrap">
            <Badge>3-year-term</Badge>
          </div>
          <p className="text-secondary">Responsible for assessing the value of property within a county for taxation purposes.</p>
        </div>
        <Button variant="outline" className="self-start">Learn more</Button>
      </div>
      <div className="w-full">

      </div>
    </div>
  )
}