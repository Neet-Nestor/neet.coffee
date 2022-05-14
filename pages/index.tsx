import type { NextPage } from "next"
import Head from "next/head"
import Bio from "./Bio"
import NavigationBar from "./NavigationBar"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Neet.coffee</title>
        <meta
          name="description"
          content="Nestor Qin's personal portfolio website"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen w-100 bg-blue-500 relative">
        <div id="page_container" className="min-w-full min-h-full m-0 bg-white">
          <NavigationBar />
          <Bio />
        </div>
      </main>
    </div>
  )
}

export default Home
