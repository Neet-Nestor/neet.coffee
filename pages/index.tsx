import type { NextPage } from "next"
import Bio from "../components/Bio"
import TechStack from "../components/TechStack"
import NavigationBar from "../components/NavigationBar"
import styles from "../styles/index.module.css"
import Projects from "../components/Projects"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nestor Qin, Full-Stack Engineer</title>
        <meta
          name="description"
          content="Nestor Qin is a versatile full-stack engineer who turns coffee into innovative Web, Mobile, and AI Applications."
        />
      </Head>
      <main className="relative min-w-[21rem] lg:min-h-svh lg:p-10">
        <div className={`${styles.background}`}></div>
        <div
          id="page-container"
          className="relative min-w-full overflow-hidden bg-white lg:min-w-min lg:min-h-[80%] lg:max-w-[94%] lg:mx-auto lg:rounded-3xl xl:max-w-[80rem]"
        >
          <NavigationBar />
          <Bio />
          <TechStack />
          <Projects />
          {/* <UnderConstruction /> */}
        </div>
      </main>
    </>
  )
}

export default Home
