import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head"

import "./styles/globals.scss"

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  console.log("layout", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID)
  return (
    <html lang="en">
      <Head>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#f2e2ce" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
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
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
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
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d9a577" />
      </Head>
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
