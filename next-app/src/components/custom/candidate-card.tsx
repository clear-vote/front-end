'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge';

//TODO: add props, set up auto-variants by comparing to current date
//maybe use json to pass info?

export default function CandidateCard() {
  let name = "John Wilson";
  let subtext = "Incumbent";
  let year = "2023";

  return (
    <div className="w-[320px] flex-none bg-card elevation-1 border border-1 rounded-lg p-6 flex gap-6 items-center">
      <p className="text-lg font-600">{ name }</p>
      <p>{ subtext }</p>
      <div className="flex wrap gap-1">
        <Badge>Business</Badge>
      </div>
    </div>
  )
}