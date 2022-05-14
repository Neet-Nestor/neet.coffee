import Image from "next/image"
import React from "react"
import avatar from "../assets/avatar.jpeg"

const Bio: React.FC = () => {
  return (
    <div className="min-h-screen min-w-100 pt-11 bg-white relative mx-10">
      <div className="py-10 sm:flex">
        <div className="relative my-6 mx-auto w-[80%] max-w-xs aspect-square border-[18px] border-white rounded-full overflow-clip shadow-[0_0_25px_0_rgba(0,0,0,0.1)] sm:max-w-xs sm:flex-none">
          <Image src={avatar} alt="Avatar" width="100%" layout="fill" />
        </div>
        <div className="text-3xl text-center sm:flex-grow">
          Hi, I'm <strong>Nestor Qin</strong>
        </div>
      </div>
    </div>
  )
}

export default Bio
