import Image from "next/image"
import React from "react"

interface BioAvatarProps {
  imageName: string
}

const BioAvatar: React.FC<BioAvatarProps> = ({ imageName }) => {
  return (
    <div className="relative my-6 mx-auto min-w-min w-[80%] max-w-xs flex aspect-square border-[18px] border-white rounded-full overflow-clip shadow-[0_0_25px_0_rgba(0,0,0,0.1)] md:max-w-xs md:flex-none md:mx-0">
      <Image
        src={`/images/${imageName}`}
        alt="Avatar"
        width="100%"
        layout="fill"
        className="rounded-full static" /* this is required for Safari to not overflow */
      />
    </div>
  )
}

const Bio: React.FC = () => {
  return (
    <div className="pt-11 min-h-screen min-w-[240px] relative flex justify-center items-center bg-white mx-10 lg:min-h-max">
      <div className="py-10 flex flex-col justify-center -mt-10 grow md:flex-row items-center md:gap-10">
        <BioAvatar imageName="avatar.jpeg" />
        {/* <BioAvatar imageName="pins-photo.JPG" /> */}
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
