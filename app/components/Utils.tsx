import React from "react"

export const MaxWidthContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto">
      {children}
    </div>
  )
}
