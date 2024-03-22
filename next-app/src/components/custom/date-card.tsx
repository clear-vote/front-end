'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"

//TODO: add props, set up auto-variants by comparing to current date
//maybe use json to pass info?

export default function DateCard() {
  let month = "Oct";
  let day = "30";
  let year = "2023";

  return (
    <div className="w-[320px] flex-none bg-card elevation-1 border border-1 rounded-lg p-6 flex gap-6 items-center">
      <div className="flex flex-col items-center">
        <p className="font-600">{month}</p>
        <p className="text-2xl font-600 leading-none">{day}</p>
        <p className="text-sm font-500 text-secondary mt-1">{year}</p>
      </div>
      <div className="flex flex-col w-full gap-1">
        <h4>Deadline for voter registration</h4>
        <p className="text-secondary">Get registered here</p>
      </div>
    </div>
  )
}