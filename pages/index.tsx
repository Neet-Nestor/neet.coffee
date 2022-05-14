import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Neet.coffee</title>
        <meta
          name="description"
          content="Nestor Qin's personal portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-3xl font-bold underline p-6">Hello world!</div>
    </div>
  )
}

export default Home
