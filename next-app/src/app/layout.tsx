import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const plex = IBM_Plex_Sans({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-plex'
 })
 const plexmono = IBM_Plex_Mono({ 
   weight: ['400', '500', '600'],
   subsets: ['latin'],
   variable: '--font-plexmono'
  })

export const metadata: Metadata = {
  title: 'ClearVote',
  description: 'Supporting local voters',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plex.className}>
      <body className="bg-background">
        {children}
        </body>
    </html>
  )
}
