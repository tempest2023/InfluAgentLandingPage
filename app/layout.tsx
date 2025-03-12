import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { WaitlistProvider } from "@/contexts/waitlist-context"
import WaitlistModal from "@/components/waitlist-modal"

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/camera.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/camera.webp" type="image/webp" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WaitlistProvider>
            {children}
            <WaitlistModal />
          </WaitlistProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
