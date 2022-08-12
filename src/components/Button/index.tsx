import * as React from "react"

interface Props {
  children: React.ReactElement | string
  onClick: () => void
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-white hover:text-primary"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
