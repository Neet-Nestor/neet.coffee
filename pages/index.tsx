import type { NextPage } from "next"
import Head from "next/head"
import Bio from "./Bio"
import NavigationBar from "./NavigationBar"
import styles from "../styles/index.module.css"

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

      <main className="min-h-screen relative lg:p-10">
        <div className={`${styles.background}`}></div>
        <div
          id="page-container"
          className="relative min-w-full overflow-hidden bg-white lg:min-w-min lg:min-h-[80%] lg:max-w-[94%] lg:mx-auto lg:rounded-3xl"
        >
          <NavigationBar />
          <Bio />
        </div>
      </main>
    </div>
  )
}

export default Home
