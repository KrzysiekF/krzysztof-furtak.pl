import * as React from "react"
import PhotoBG from "../Hero/photo-bg.png"
import LinkedINIcon from "../../images/icons/LinkedINIcon"
import Button from "../Button"
import { navigate } from "gatsby"

const Bio = () => {
  return (
    <div className="container py-28">
      <div className={"grid grid-cols-1 items-stretch"}>
        {/*<div className={"flex-auto self-center"} />*/}
        <div className={"flex-auto text-center"}>
          <h3>Krótko o mnie</h3>
          <p>
            Jestem doświadczonym programistą z wielką pasją do swojego zawodu.
            Napisanie wielu set tysięcy linii kodu pozwoliło mi poczuć się
            pewnie w takich technologiach jak: JavaScript, ReactJS, Redux,
            NodeJS, ExpressJS, TypeScript, MongoDB, SASS.
          </p>
          <p className="mb-0">
            <a href="https://www.linkedin.com/in/krzysztof-furtak/">
              <LinkedINIcon className="w-5 inline-block mr-1" /> LinkedIN
            </a>
          </p>
          <p>
            <Button onClick={() => navigate("/o-mnie")}>
              Dowiedz się więcej...
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bio
