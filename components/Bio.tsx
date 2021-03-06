import Image from "next/image"
import React, { useContext, useEffect, useState } from "react"
import { WindowInnerSizeContext } from "./ResizeObserver"
import styles from "../styles/Bio.module.scss"

const Arrow: React.FC = () => (
  <svg viewBox="0 0 70 40">
    <path
      fill="#FF8B60"
      d="M61.46 1.46a5 5 0 1 1 7.08 7.08l-6.92 6.9L50 12.95 61.46 1.46z"
    ></path>
    <path
      fill="#FFB246"
      d="M64.21 12.86L38.54 38.54a5 5 0 0 1-7.08 0l-30-30a5 5 0 0 1 7.08-7.08L35 27.93 54.54 8.39l9.67 4.47z"
    ></path>
    <path
      fill="#FFD84C"
      d="M58.68 18.4L38.54 38.53a5 5 0 0 1-7.08 0l-30-30a5 5 0 0 1 7.08-7.08L35 27.93 38.93 24l19.75-5.6z"
    ></path>
    <path
      fill="#A9D78C"
      d="M26.78 33.85L7.57 14.64l11.34-2.8 7.08 7.08z"
    ></path>
    <path
      fill="#6BC8A3"
      d="M10.4 17.47L1.46 8.54a5 5 0 0 1 7.08-7.08l13.64 13.65-11.78 2.36z"
    ></path>
  </svg>
)

const DownloadIcon: React.FC = () => (
  <i className={styles.icon}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  </i>
)

const FizzyButton: React.FC<{
  icon: JSX.Element
  onClick?: () => void
  href?: string
}> = (props) => {
  const { icon, onClick, href, ...otherProps } = props
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault()
          onClick()
        }
      }}
      role="button"
      className={`${styles.fizzy_button} border-2 rounded text-base flex flex-row text-slate-600 border-slate-600 px-4 py-2`}
      {...otherProps}
    >
      {icon}
      <span className={styles.text}>Resume</span>
      <span>
        <i className={`${styles.tick}`}></i>
      </span>
      <div className={styles.spots_container}>
        {Array(52)
          .fill(null)
          .map((_, i) => (
            <div className={styles.spot} key={`spot_${i}`} />
          ))}
      </div>
    </a>
  )
}

const Bio: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { innerHeight, innerWidth } = useContext(WindowInnerSizeContext)
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    // This is to fix the tab bar overlapping with `100vh` on mobile browsers
    setContainerHeight(window.innerHeight)
  }, [])

  return (
    <div
      id={styles.bio}
      className="pt-11 min-w-[240px] relative flex justify-center items-center bg-white mx-10 lg:min-h-max lg:h-auto"
      style={{
        minHeight:
          innerWidth >= 1024
            ? "0"
            : `calc(${containerHeight}px - env(safe-area-inset-bottom, 0px))`,
      }}
    >
      <div className="py-10 lg:py-20 flex flex-col justify-center -mt-10 -translate-y-5 grow items-center md:flex-row md:gap-14 lg:translate-y-0">
        <div
          className={`${styles.container} relative opacity-90 my-6 mx-auto min-w-min w-[80%] max-w-xs flex aspect-square md:max-w-xs md:flex-none md:mx-0`}
        >
          <div
            className={`${styles.photo} ${styles.behind} absolute w-full h-full border-[18px] border-white rounded-full shadow-[0_0_25px_0_rgba(0,0,0,0.1)]`}
            aria-label="Author's photo"
          >
            <Image
              src="/images/pins-photo.jpg"
              alt="Avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-full static" /* this is required for Safari to not overflow */
            />
          </div>
          <div
            className={`${styles.photo} absolute w-full h-full border-[18px] border-white rounded-full shadow-[0_0_25px_0_rgba(0,0,0,0.1)]`}
            aria-label="Avatar"
          >
            <Image
              src="/images/avatar.jpeg"
              alt="Avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-full static" /* this is required for Safari to not overflow */
            />
          </div>
        </div>
        <div className="text-left leading-loose flex flex-col items-center md:inline-block">
          <p className="text-3xl">
            Hi, I&apos;m <strong>Nestor Qin</strong>
          </p>
          <p className="text-md text-gray-700">
            Or... Just call me <strong>Neet</strong>, casually
          </p>

          <div className="flex flex-row mt-4">
            <FizzyButton
              icon={<DownloadIcon />}
              href="https://www.dropbox.com/s/mtd321t9598x8px/Neet_Resume_FullStack_2022.pdf?dl=0"
              aria-label="Download Resume"
            />
          </div>
        </div>
      </div>
      {/* <div
        className={`${
          styles.arrow
        } absolute bottom-6 sm:bottom-8 w-14 h-10 lg:hidden transition-transform ease-out duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0 -translate-y-8"
        } ${innerHeight < 600 ? "hidden" : "block"}`}
      >
        <Arrow />
      </div> */}
    </div>
  )
}

export default Bio
