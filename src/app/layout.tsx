import Header from '@/components/header'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Providers } from './providers'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Disminuir.link - Acorta tus URLs fácilmente',
  description:
    'Disminuir.link te permite acortar tus URLs de manera rápida y sencilla, mejorando la gestión y el seguimiento de tus enlaces.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased purple-dark text-foreground bg-background`}
      >
        <SpeedInsights />
        <Analytics />
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
