import '@/styles/globals.css'
import React from 'react'
import { Metadata } from 'next'

import { siteConfig } from '@/config/site'
import Footer from '@/components/footer'
// import { fontSans } from '@/lib/fonts'
// import { cn } from '@/lib/utils'
import Navbar from '@/components/navbar/navbar'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="pt-br" suppressHydrationWarning>
        <head />
        <body className="max-w-full bg-white">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1">{children}</div>
            </div>
          </ThemeProvider>
          <Footer />
        </body>
      </html>
    </>
  )
}
