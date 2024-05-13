import type { NextPage } from "next"
import Bio from "../components/Bio"
import TechStack from "../components/TechStack"
import NavigationBar from "../components/NavigationBar"
import styles from "../styles/index.module.css"
import Projects from "../components/Projects"

const Home: NextPage = () => {
  return (
    <main className="relative min-w-[21rem] lg:min-h-screen lg:p-10">
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
  )
}

export default Home
