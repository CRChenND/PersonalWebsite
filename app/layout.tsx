import { Metadata } from 'next'
import { Fira_Code, Inter } from 'next/font/google'
import { Analytics } from '../components/analytics'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { MobileNav } from '../components/mobileNav'
import './styles/globals.css'

const FontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const FontFiraCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://chaoranchen.com'),
  title: {
    default: 'Chaoran Chen | HCI, Security, and Privacy Researcher',
    template: '%s | Chaoran Chen',
  },
  description: 'HCI, usable privacy and security, and Human-AI interaction researcher',
  openGraph: {
    title: 'Chaoran Chen',
    description: 'HCI, usable privacy and security, and Human-AI interaction researcher',
    url: 'https://chaoranchen.com',
    siteName: 'Chaoran Chen',
    images: [],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    creator: '@CharlieCRChen',
    title: 'Chaoran Chen',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/static/favicon.ico',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${FontInter.variable} ${FontFiraCode.variable} font-sans flex flex-col min-h-screen relative`}
      >
        <MobileNav />
        <Header />
        <main className="container flex-grow max-w-screen-xl px-4 m-auto mt-10 sm:px-6 md:px-8">
          {children}
        </main>
        <Footer />
        <Analytics />
        <BackgroundNoise />
      </body>
    </html>
  )
}

function BackgroundNoise() {
  return (
    <div className="absolute inset-0 -z-20 opacity-80 h-full mix-blend-overlay noise-bg"></div>
  )
}
