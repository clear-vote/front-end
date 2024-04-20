'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

import '@/app/styles.css'

/// ============================================
/// Summary
/// • The SiteBar() component is used to handle global navigation on the site.
///
/// Remarks
/// • This should only implemented once, in @/app/layout.tsx. 
/// 
/// TODO
/// • Update styling, the glass effect looks really ugly right now.
/// ============================================


export default function SiteBar() {
  
  // References the current url to determine how it should be displayed.
  const pathname = usePathname();
  let isHome = (pathname === "/");

  let navStyling = "text-white px-8 py-3 flex justify-between items-center";

  if (!isHome) {
    navStyling = "px-8 py-3 flex justify-between items-center backdrop-blur";
  }

  return (
    <nav className={navStyling}>
      <Link href="/">
        <div className="relative flex items-center justify-center">
          <div className="absolute -z-10 rounded-full bg-white bg-opacity-5 blur-xl w-[72px] h-[72px]"/>
          <div className="relative">
            <div className="absolute -inset-1 blur-lg bg-white opacity-25 rounded-full"></div>
            <Image
              src="/favicon-plain.svg"
              width={48}
              height={48}
              alt="clearvote logo"
              className="z-10 relative"
            />
          </div>
          {isHome ? null : (<h3>Clearvote</h3>)}
          
        </div>
      </Link>
      <ul className="flex gap-4 items-center">
        <li>
          <Button variant="ghost" size="sm" asChild className=" hover:text-blue-300">
            <Link href="/about">About</Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost" size="sm" className="hover:text-blue-300">
            <Link href="https://medium.com/clearvote" target="_blank">Blog</Link>
          </Button>
        </li>
        {/* <li>
          <Button variant="ghost" size="sm" className="hover:text-blue-300">
            Help
          </Button>
        </li> */}
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
