import type { NextPage } from "next"
import Head from "next/head"
import NavigationBar from "./NavigationBar"

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-100 bg-blue-500">
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

      <NavigationBar />
      <div>Hello world!</div>
    </div>
  )
}

export default Home
