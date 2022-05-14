import Image from "next/image"
import React from "react"
import avatar from "../assets/avatar.jpeg"

const Bio: React.FC = () => {
  return (
    <div className="pt-11 min-h-screen bg-white relative mx-10 lg:min-h-max">
      <div className="py-10 md:flex md:gap-10">
        <div className="relative my-6 mx-auto w-[80%] max-w-xs aspect-square border-[18px] border-white rounded-full overflow-clip shadow-[0_0_25px_0_rgba(0,0,0,0.1)] md:max-w-xs md:flex-none">
          <Image src={avatar} alt="Avatar" width="100%" layout="fill" />
        </div>
        <div className="text-3xl text-center md:text-3xl md:flex-grow md:text-left md:flex md:flex-col md:justify-center">
          <p>
            Hi, I&apos;m <strong>Nestor Qin</strong>
          </p>
          <p>
            Or, you can call me <strong>Neet</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bio
