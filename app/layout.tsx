import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PTIBOUTON Kitchen',
  description: 'A warm, cozy kitchen where creativity and imagination come together',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
