import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'nexis - Creative Digital Studio',
  description: 'Modern digital design and development portfolio. We create innovative digital experiences.',
  generator: 'v0.app',
  icons: {
    icon: '/nexislogo.png',
    apple: '/nexislogo.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} font-sans antialiased`} style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
