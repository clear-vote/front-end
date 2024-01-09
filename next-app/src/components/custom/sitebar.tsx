'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function SiteBar() {

  return (
    <nav className="bg-card elevation-1 px-8 py-3 flex justify-between items-center">
      <Link href="/">
        <Image
            src="/logo.svg"
            width={48}
            height={48}
            alt="clearvote logo"
          />
      </Link>
      <ul className="flex gap-4 items-center">
        <li>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/about">About</Link>
          </Button>
        </li>
        <li><Button variant="ghost" size="sm">
          Blog
        </Button></li>
        <li><Button variant="ghost" size="sm">
          Help
        </Button></li>
        <li><Button asChild>
          <Link href="/sandbox">Log In</Link>
        </Button></li>
      </ul>
    </nav>
  )
}