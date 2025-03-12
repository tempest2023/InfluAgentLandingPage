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
        url: '/icon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/icon.png',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/icon.png',
        type: 'image/png',
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
        <link rel="icon" href="/icon.ico" type="image/x-icon" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" type="image/png" />
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
