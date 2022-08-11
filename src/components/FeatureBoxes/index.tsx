import * as React from "react"
import Box from "./Box"
import IconsIcon from "../../images/icons/IconsIcon"
import CodeIcon from "../../images/icons/CodeIcon"
import HandShakeIcon from "../../images/icons/HandShakeIcon"

const FeatureBoxes = () => {
  return (
    <div className="grid grid-cols-3 gap-20">
      <Box
        icon={<IconsIcon className="w-10 fill-primary" />}
        title="UI/UX"
        description="Dbam aby aplikacje były ładne i intuicyjne w obsłudze"
      />
      <Box
        icon={<CodeIcon className="w-10 fill-primary" />}
        title="Czysty kod"
        description="Staram się aby mój kod był czysty i łatwy w rozwoju"
      />
      <Box
        icon={<HandShakeIcon className="w-10  fill-primary" />}
        title="Współpraca"
        description="Jesteśmy w stałym kontakcie, na każdym etapie rozwoju aplikacji"
      />
    </div>
  )
}

export default FeatureBoxes
