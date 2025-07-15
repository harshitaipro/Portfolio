import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harshit Tiwari',
  description: 'Harshit',
  generator: 'Harshit',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
