// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import ClientWrapper from './clientwrapper' 

export const metadata: Metadata = {
  title: 'Faraaz Mahmood',
  description: 'Personal portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
