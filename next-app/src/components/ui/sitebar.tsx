'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function SiteBar() {

  return (
    <header>
      <nav className="bg-card border-b-2 border-border px-8 py-3 flex justify-between items-center">
        <Link href="/">
          <Image
              src="/logo.svg"
              width={48}
              height={48}
              alt="clearvote logo"
            />
        </Link>
        <ul className="flex gap-4 items-center">
          <li><Button variant="ghost" size="sm">
            About
          </Button></li>
          <li><Button variant="ghost" size="sm">
            Blog
          </Button></li>
          <li><Button variant="ghost" size="sm">
            Help
          </Button></li>
          <li><Button>
            <Link href="/sandbox">Log In</Link>
          </Button></li>
        </ul>
      </nav>
    </header>
  )
}