import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

const NavigationBar: React.FC = () => {
  const [isIconLoaded, setIconLoaded] = useState(false)

  return (
    <header className="bg-white px-4 pt-1 pb-2 z-50 w-full shadow-md absolute left-0 right-0 top-0">
      <div className="flex justify-center">
        <Link
          href="/"
          className={`transition-all ease-out duration-1000 ${
            isIconLoaded ? "opacity-100" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="flex items-end gap-1 align-bottom">
            <span className="font-bold text-2xl leading-none">Neet</span>
            <span className="text-md leading-none">dot</span>
            <div className="relative h-8 w-8">
              <Image
                src="/images/coffee.png"
                alt="Coffee logo"
                loading="eager"
                onLoad={() => {
                  setIconLoaded(true)
                }}
                fill
                sizes="100vw"
              />
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default NavigationBar
