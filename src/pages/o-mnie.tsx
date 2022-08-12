import * as React from "react"
import Layout from "../components/layout"

const OMnie = ({ location }) => {
  return (
    <Layout location={location} title="O Mnie">
      <div className="container pt-20 pb-10">
        <h2>O mnie</h2>
        <p className="text-xl font-medium">
          Witaj! Nazywam się Krzysztof Furtak i pracuje jako programista
          aplikacji webowych.
        </p>
        <p>
          Swoją przygodę z tą branżą rozpocząłem w 2005 roku. W mojej pierwszej
          pracy byłem zatrudniony jako grafik i developer.
        </p>
        <p>
          Od tamtego czasu lat minęło sporo, nie będę zanudzał :) W tej chwili
          mam wspaniałą żonę Paulinę i dwójkę wspaniałych dzieci (Natalkę i
          Miłoszka) :) i przede wszystkim jestem mężem i ojcem.
        </p>
        <p>
          Zainteresowań mam zbyt dużo! Brakuje mi na wszystko czasu :) Staram
          się być aktywny, kocham jazdę na rolkach i ćwiczenia siłowe. Poza tym
          mam szklarnię, drzewka i krzaczki owocowe i takie tam. Bardzo lubię
          oglądać piękne rzeczy (grafiki, rysunki, projekty 3D). Mam wielki
          szacunek do ludzi, którzy tworzą takie rzeczy. Kiedyś sam chciałem być
          grafikiem, ale drogi poprowadziły trochę inaczej :)
        </p>
        <p>
          ... ale też nie jest tak, że żałuję. Uwielbiam programować, tworzyć
          aplikacje, które pomagają innym i ich pracy. Bardzo lubię je
          projektować i rozmawiać z ludźmi o ich potrzebach. Tak, kocham swoją
          pracę! :)
        </p>
        <p>Jeśli to czytasz to dziękuję bardzo za poświęcony czas :)</p>
        <p>Pozdrawiam!</p>
      </div>
    </Layout>
  )
}

export default OMnie
