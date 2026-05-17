import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Alfiansyah | Personal Portfolio',
  description: 'Professional multimedia specialist with expertise in quality checking, design, and digital media. Open for opportunities and professional collaboration.',
  keywords: ['portfolio', 'multimedia', 'quality checker', 'designer', 'professional'],
  authors: [{ name: 'Alfiansyah' }],
  openGraph: {
    title: 'Alfiansyah | Personal Portfolio',
    description: 'Professional multimedia specialist with expertise in quality checking, design, and digital media.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
