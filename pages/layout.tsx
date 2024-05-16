import { GoogleAnalytics } from "@next/third-parties/google"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.GOOGLE_ANALYTICS_ID && (
          <>
            <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
          </>
        )}
      </body>
    </html>
  )
}
