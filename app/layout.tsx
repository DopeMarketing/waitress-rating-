import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Waitress Rating - Rate Your Server',
  description: 'Quickly rate your server\'s performance and help improve restaurant service quality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}