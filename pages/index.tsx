import type { NextPage } from "next"
import Head from "next/head"
import Script from "next/script"
import Bio from "../components/Bio"
import TechStack from "../components/TechStack"
import NavigationBar from "../components/NavigationBar"
import UnderConstruction from "../components/UnderConstruction"
import styles from "../styles/index.module.css"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nestor Qin, Full-Stack Engineer-</title>
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

      <main className="relative min-w-[20rem] lg:min-h-screen lg:p-10">
        <div className={`${styles.background}`}></div>
        <div
          id="page-container"
          className="relative min-w-full overflow-hidden bg-white lg:min-w-min lg:min-h-[80%] lg:max-w-[94%] lg:mx-auto lg:rounded-3xl xl:max-w-[80rem]"
        >
          <NavigationBar />
          <Bio />
          <TechStack />
          <UnderConstruction />
        </div>
      </main>

      <Script
        id="Google Tag Manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KJJ2D43');
          `,
        }}
      />
    </>
  )
}

export default Home
