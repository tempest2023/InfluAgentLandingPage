import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InfluAgent',
  description: 'InfluAgent enhances everyone\'s social growth with AI.',
  icons: {
    icon: [
      {
        url: '/camera.webp',
        type: 'image/webp',
      }
    ],
    apple: [
      {
        url: '/camera.webp',
        type: 'image/webp',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/camera.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/camera.webp" type="image/webp" />
      </head>
      <body>{children}</body>
    </html>
  )
}
