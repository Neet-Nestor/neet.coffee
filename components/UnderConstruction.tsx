import Image from "next/image"
import React from "react"

const UnderConstruction: React.FC = () => {
  return (
    <section className="flex justify-center items-center flex-col bg-yellow-100 h-svh py-12 px-8">
      <Image
        width={200}
        height={180}
        alt="The site is still under construction"
        src="https://cdn.pixabay.com/photo/2017/06/16/07/26/under-construction-2408061_960_720.png"
      />
      <div className="text-lg mt-10 max-w-xl text-center">
        This site is still under construction. Please check back later!
      </div>
    </section>
  )
}

export default UnderConstruction
