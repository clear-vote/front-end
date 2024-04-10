'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

export default function SiteBar() {

  return (
    <nav className="text-white elevation-1 px-8 py-3 flex justify-between items-center">
      <Link href="/">
        <div className="relative flex items-center justify-center">
          <div className="absolute -z-10 rounded-full bg-white bg-opacity-10 blur-xl w-[72px] h-[72px]"></div>
          <div className="relative">
            <div className="absolute -inset-1 blur-lg bg-white opacity-25 rounded-full"></div>
            <Image
              src="/favicon-plain.svg"
              width={75}
              height={75}
              alt="clearvote logo"
              className="z-10 relative"
            />
          </div>
          <h3 className="text-black">Clearvote</h3> 
        </div>
      </Link>
      <ul className="flex gap-4 items-center">
        <li>
          <Button variant="ghost" size="sm" asChild className="text-white hover:text-blue-300">
            <Link href="/about">About</Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost" size="sm" className="text-white hover:text-blue-300">
            <Link href="https://medium.com/clearvote">Blog</Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost" size="sm" className="text-white hover:text-blue-300">
            Help
          </Button>
        </li>
        <li>
          <Button variant="discord" asChild className="bg-[#cbafef] text-white hover:text-[#e95635] hover:bg-white bg-black">
            <Link href="https://discord.gg/8mvz4S7Z" target="_blank">
              <FontAwesomeIcon icon={faDiscord} className="mr-2" />
              Join our Discord
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  )
}
