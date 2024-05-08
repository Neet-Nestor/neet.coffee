import Image from "next/image"
import React, { useContext, useEffect, useState } from "react"
import { WindowInnerSizeContext } from "./ResizeObserver"

const UnderConstruction: React.FC = () => {
  const { innerWidth } = useContext(WindowInnerSizeContext)
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    // This is to fix the tab bar overlapping with `100vh` on mobile browsers
    setContainerHeight(window.innerHeight)
  }, [])

  return (
    <section
      className="flex justify-center items-center flex-col bg-yellow-100	py-12 px-8"
      style={{
        minHeight:
          innerWidth >= 1024
            ? "0"
            : `calc(${containerHeight}px - env(safe-area-inset-bottom, 0px))`,
      }}
    >
      <Image
        width={200}
        height={180}
        alt="The site is still under construction"
        src="https://cdn.pixabay.com/photo/2017/06/16/07/26/under-construction-2408061_960_720.png"
      />
      <div className="text-lg mt-10 max-w-xl text-center">
        Unfortunately, this site is still under construction due to the
        owner&apos;s limited available time after work. Please check later!
      </div>
    </section>
  )
}

export default UnderConstruction
