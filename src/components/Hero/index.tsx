import * as React from "react"
import PhotoBG from "./photo-bg.png"
import "./styles.css"

const Hero = () => {
  return (
    <div className={"hero bg-gradient-to-b from-bgLighten to-bgLight"}>
      <div className="container">
        <div className={"grid grid-cols-2 items-stretch h-full"}>
          <div className={"flex-auto self-center"}>
            <div className={"font-light text-lg text-secondary"}>
              Witaj! Nazywam się
            </div>
            <div className={"font-bold text-5xl uppercase text-primary"}>
              Krzysztof Furtak
            </div>
            <div className={"text-xl font-medium text-secondary mt-3"}>
              Jestem doświadczonym programistą, który może usprawnić pracę
              Twojej firmy.
            </div>
          </div>
          <div className={"flex-auto self-end justify-self-center"}>
            <div>
              <img src={PhotoBG} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
