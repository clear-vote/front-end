'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function SiteBar() {

  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between p-6">
          <li>
            <Link href="/">
              <Image
                  src="/logo.svg"
                  width={48}
                  height={48}
                  alt="clearvote logo"
                />
            </Link>
          </li>
          <li>
            <Button>
              <Link href="/sandbox">Go to sandbox</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}