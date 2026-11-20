import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

import { data } from './data'

import Header from './components/sections/Header'
import Footer from './components/sections/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter-sans',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: 'Luma Learning — Build skills that actually move you forward',
  description:
    'Practical online courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.',
  keywords: [
    'online learning',
    'online courses',
    'e-learning',
    'product design',
    'technology courses',
    'business skills',
    'creative courses',
    'Luma Learning',
  ],
  openGraph: {
    title: 'Luma Learning — Build skills that actually move you forward',
    description:
      'Practical online courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.',
    type: 'website',
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header data={data.header} />

        <main className="flex-1">{children}</main>

        <Footer data={data.footer} />
      </body>
    </html>
  )
}
