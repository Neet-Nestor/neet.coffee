import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"

import "./styles/globals.scss"
import { Metadata } from "next"

type Props = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Nestor Qin, Full-Stack & AI Engineer",
  description:
    "Nestor Qin is an experienced full-stack engineer who turns coffee into innovative Web, Mobile, and AI Applications.",
  applicationName: "Nestor Qin's Portfolio",
  themeColor: "#f2e2ce",
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#f2e2ce" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      {/* Figtree font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet"
      />
      {/* Inter font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <body>
        {children}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
