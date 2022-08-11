import * as React from "react"

interface Props {
  icon: React.ReactElement
  title: string
  description: string
}

const Box = ({ icon, title, description }: Props) => {
  return (
    <div className="bg-white px-7 py-4 rounded-3xl drop-shadow-xl">
      <div className="grid grid-cols-4">
        <div className="self-center">{icon}</div>
        <div className="col-span-3">
          <div className="font-medium text-lg">{title}</div>
          <div className="text-xs">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default Box
