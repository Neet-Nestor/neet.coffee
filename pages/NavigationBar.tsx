import Image from "next/image"
import Link from "next/link"
import React from "react"
import coffee from "../assets/coffee.png"

const NavigationBar: React.FC = () => {
  return (
    <header className="bg-white px-4 pt-1 pb-2 z-50 w-100 shadow-md absolute left-0 right-0 top-0">
      <div className="flex justify-center">
        <Link href="/">
          <a>
            <div className="flex items-end gap-1 align-bottom">
              <span className="font-bold text-2xl leading-none">Neet</span>
              <span className="text-md leading-none">dot</span>
              <div className="relative h-8 w-8">
                <Image
                  src={coffee}
                  alt="Coffee logo"
                  layout="fill"
                  height={40}
                  width={40}
                />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default NavigationBar