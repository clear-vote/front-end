import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'
import SiteBar from '@/components/custom/sitebar'
// import ScrollUp from '@/components/scrollup'
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
      {/* <head>
        <script src="https://kit.fontawesome.com/66c71971cc.js" crossOrigin="anonymous"></script>
      </head> */}
      {/* <ScrollUp/> */}
      <head>
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
      </head>
      <body className="bg-background">
        <header className="fixed top-0 w-full">
          <SiteBar />
        </header>
        {children}
        </body>
    </html>
  )
}
