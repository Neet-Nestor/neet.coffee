import Image from "next/image"
import React from "react"
import styles from "../styles/Bio.module.scss"

const Bio: React.FC = () => {
  return (
    <div className="pt-11 min-h-screen min-w-[240px] relative flex justify-center items-center bg-white mx-10 lg:min-h-max">
      <div className="py-10 flex flex-col justify-center -mt-10 grow md:flex-row items-center md:gap-10">
        <div
          className={`${styles.container} relative my-6 mx-auto min-w-min w-[80%] max-w-xs flex aspect-square md:max-w-xs md:flex-none md:mx-0`}
        >
          <div
            className={`${styles.photo} ${styles.behind} absolute w-full h-full border-[18px] border-white rounded-full shadow-[0_0_25px_0_rgba(0,0,0,0.1)]`}
          >
            <Image
              src="/images/pins-photo.JPG"
              alt="Avatar"
              width="100%"
              layout="fill"
              className="rounded-full static" /* this is required for Safari to not overflow */
            />
          </div>
          <div
            className={`${styles.photo} absolute w-full h-full border-[18px] border-white rounded-full shadow-[0_0_25px_0_rgba(0,0,0,0.1)]`}
          >
            <Image
              src="/images/avatar.jpeg"
              alt="Avatar"
              width="100%"
              layout="fill"
              className="rounded-full static" /* this is required for Safari to not overflow */
            />
          </div>
        </div>
        <div className="text-left inline-block leading-loose md:text-left md:flex md:flex-col md:justify-center">
          <p className="text-3xl">
            Hi, I&apos;m <strong>Nestor Qin</strong>
          </p>
          <p className="text-md text-gray-700">
            Or... Just call me <strong>Neet</strong>, casually
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bio
