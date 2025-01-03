"use client"

import Image from "next/image"
import React, { useEffect, useMemo, useState } from "react"
import styles from "../styles/Bio.module.scss"
import GitHubIcon from "../../public/images/github.png"
import { CoffeePaperCup } from "./icon/CoffeePaperCup"

const ANIMATION_END = 200

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

const GoogleScholarIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1.3rem"
    height="1.3rem"
  >
    <path fill="#4285f4" d="M256 411.12L0 202.667 256 0z" />
    <path fill="#356ac3" d="M256 411.12l256-208.453L256 0z" />
    <circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333" />
    <path
      fill="#76a7fa"
      d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"
    />
  </svg>
)

const LinkedInIcon: React.FC = () => (
  <svg
    height="24"
    viewBox="0 0 72 72"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z"
        fill="#007EBB"
      />
      <path
        d="M59,57 L49.959375,57 L49.959375,41.6017895 C49.959375,37.3800228 48.3552083,35.0207581 45.0136719,35.0207581 C41.3785156,35.0207581 39.4792969,37.4759395 39.4792969,41.6017895 L39.4792969,57 L30.7666667,57 L30.7666667,27.6666667 L39.4792969,27.6666667 L39.4792969,31.6178624 C39.4792969,31.6178624 42.0989583,26.7704897 48.3236979,26.7704897 C54.5455729,26.7704897 59,30.5699366 59,38.4279486 L59,57 Z M20.372526,23.8257036 C17.4048177,23.8257036 15,21.4020172 15,18.4128518 C15,15.4236864 17.4048177,13 20.372526,13 C23.3402344,13 25.7436198,15.4236864 25.7436198,18.4128518 C25.7436198,21.4020172 23.3402344,23.8257036 20.372526,23.8257036 Z M15.8736979,57 L24.958724,57 L24.958724,27.6666667 L15.8736979,27.6666667 L15.8736979,57 Z"
        fill="#FFF"
      />
    </g>
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

const LinkButton: React.FC<{
  icon: JSX.Element
  text: string
  className: string
  href?: string
}> = (props) => {
  const { icon, href, text, className, ...otherProps } = props
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      role="button"
      className={`border-2 rounded text-base flex justify-evenly items-center flex-row ${className} border-slate-600 px-4 py-2 w-full`}
      {...otherProps}
    >
      {icon}
      <span className={`${styles.text} ml-1`}>{text}</span>
    </a>
  )
}

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
      className={`${styles.fizzy_button} border-2 rounded text-base flex flex-row text-slate-600 border-slate-600 px-4 py-2 w-full`}
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
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const [rotate, setRotate] = useState(0)

  const resumeURL = useMemo(() => process.env.NEXT_PUBLIC_RESUME_URL, [])

  const handleScroll = () => {
    const position = window.scrollY
    const isReduced = !!window.matchMedia(`(prefers-reduced-motion: reduce)`)
      ?.matches

    if (!isReduced) {
      setTranslateX((4 * position) / ANIMATION_END)
      setTranslateY((6 * position) / ANIMATION_END)
      setRotate((90 * position) / ANIMATION_END)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="py-[44px] relative flex mx-10 h-svh max-h-[60rem]">
      <div className="relative w-full flex flex-col sm:my-4 justify-center grow items-center md:flex-row md:gap-14 lg:py-16 xl:gap-24">
        <div className="relative h-full max-h-48 opacity-90 my-4 min-w-min flex aspect-square sm:max-h-60 md:max-h-72 md:flex-none md:mx-0:">
          <div
            className="absolute relative w-full h-full border-4 border-white rounded-full shadow-[0_0_25px_0_rgba(0,0,0,0.25)]"
            aria-label="photo of Nestor Qin"
          >
            <Image
              src="/images/photo.jpg"
              alt="Avatar"
              className="rounded-full static" /* this is required for Safari to not overflow */
              fill
              loading="eager"
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
            <div
              className="absolute w-8 right-6 top-24 sm:w-8 sm:right-8 sm:top-32 md:right-12 md:top-36 md:w-12"
              style={{
                transform: `translate(${translateX}rem, ${translateY}rem) rotate(${rotate}deg)`,
              }}
            >
              <CoffeePaperCup />
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col items-center md:inline-block md:text-start">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl sm:text-3xl sm:mb-4 leading-loose">
              Hi, I&apos;m <strong>Nestor Qin</strong>
            </h1>
            <p className="text-md sm:text-lg">
              A Full-stack AI Software Engineer
            </p>
            <p className="text-md sm:text-lg text-gray-600">
              Turning Coffee into Web, Mobile, & AI Applications
            </p>
          </div>
          <div className="flex flex-col mt-4 gap-2 w-32 md:w-fit">
            <div className="flex flex-col gap-2 md:flex-row md:w-64">
              <FizzyButton
                icon={<DownloadIcon />}
                href={resumeURL}
                aria-label="Download Resume"
              />
              <LinkButton
                icon={<GoogleScholarIcon />}
                className="bg-white text-slate-600"
                text="Scholar"
                href="https://scholar.google.com/citations?user=CqavBhQAAAAJ"
              />
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:w-64">
              <LinkButton
                icon={
                  <div
                    className={`w-6 h-6 bg-white rounded-full ${styles.icon} relative`}
                  >
                    <Image src={GitHubIcon} alt="GitHub" fill sizes="100vw" />
                  </div>
                }
                className="bg-black text-white"
                text="GitHub"
                href="https://github.com/Neet-Nestor"
              />
              <LinkButton
                icon={<LinkedInIcon />}
                className="bg-[#007EBB] text-white"
                text="LinkedIn"
                href="https://www.linkedin.com/in/nestor-qin/"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0 md:bottom-8 lg:bottom-16">
        <div className={`${styles.arrow} w-8 mx-auto sm:w-12`}>
          <Arrow />
        </div>
      </div>
    </section>
  )
}

export default Bio
