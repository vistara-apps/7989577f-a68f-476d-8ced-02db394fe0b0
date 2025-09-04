import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AdGenie Remix - Spin Ad Variations, Post Faster, Sell More',
  description: 'A mini-app for creators and marketers to automatically generate and post diverse ad variations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1a0d2e',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
