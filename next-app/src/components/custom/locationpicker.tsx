'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function LocationPicker() {

  return (
    <div className="bg-card hover:bg-background elevation-1 border border-1 rounded-lg px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faLocationDot} size="xl" />
        <div className="flex flex-col">
          <p className="font-500">University of Washington</p>
          <small>Seattle, WA</small>
        </div>
      </div>
      <Button variant="outline">Change</Button>
    </div>
  )
}