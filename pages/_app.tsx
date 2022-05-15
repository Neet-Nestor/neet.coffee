import "../styles/globals.css"
import ResizeObserver from "../components/ResizeObserver"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ResizeObserver>
      <Component {...pageProps} />
    </ResizeObserver>
  )
}

export default MyApp
