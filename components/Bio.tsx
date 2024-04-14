import Image from "next/image"
import React, { useContext, useEffect, useState } from "react"
import { WindowInnerSizeContext } from "./ResizeObserver"
import styles from "../styles/Bio.module.scss"
import GitHubIcon from "../public/images/github.png"

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
      className={`border-2 rounded text-base flex flex-row ${className} border-slate-600 px-4 py-2 w-full`}
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
            className={`absolute w-full h-full border-[12px] border-white rounded-full shadow-[0_0_25px_0_rgba(0,0,0,0.25)]`}
            aria-label="photo of Nestor Qin"
          >
            <Image
              src="/images/photo.jpg"
              alt="Avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-full static" /* this is required for Safari to not overflow */
            />
          </div>
        </div>
        <div className="text-left flex flex-col items-center md:inline-block">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-3xl leading-loose">
              Hi, I&apos;m <strong>Nestor Qin</strong>
            </p>
            <p className="text-md">A Versatile Full-Stack Engineer</p>
            <p className="text-gray-500">
              Crafting Web, Mobile, & AI Applications
            </p>
          </div>
          <div className="flex flex-col mt-4 gap-2 w-32 mt-8">
            <FizzyButton
              icon={<DownloadIcon />}
              href="https://www.dropbox.com/scl/fi/gg6p5byqnfd7zngiugddp/Nestor_Qin_Resume.pdf?rlkey=cjhk0bbaagklikxtkucjsk9lh&dl=1"
              aria-label="Download Resume"
            />
            <LinkButton
              icon={
                <div
                  className={`w-6 h-6 bg-white rounded-full ${styles.icon} relative`}
                >
                  <Image src={GitHubIcon} alt="GitHub" layout="fill" />
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
      <div
        className={`${
          styles.arrow
        } absolute bottom-6 sm:bottom-8 w-14 h-10 lg:hidden transition-transform ease-out duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0 -translate-y-8"
        } ${innerHeight < 600 ? "hidden" : "block"}`}
      >
        <Arrow />
      </div>
    </div>
  )
}

export default Bio
