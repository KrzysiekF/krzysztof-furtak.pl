import * as React from "react"

const TopBar = () => {
  return (
    <div className="absolute top-0 w-full z-10">
      <div className="container h-14">
        <div className="grid grid-cols-2 items-stretch h-full">
          <div className="flex-auto self-center">
            <span className="font-black text-2xl">
              <span>K</span>
              <span className="inline-block scale-x-[-1] ml-[-3px]">K</span>
            </span>
          </div>
          <div className="flex-auto self-center">
            <nav className="text-right">
              <ul className="m-0 inline-block">
                <li className="inline-block m-0 px-3">
                  <a href="/" className="text-color-default hover:text-primary">
                    Start
                  </a>
                </li>
                <li className="inline-block m-0 px-3">
                  <a
                    href="/o-mnie"
                    className="text-color-default hover:text-primary"
                  >
                    O Mnie
                  </a>
                </li>
                <li className="inline-block m-0 px-3 hidden">
                  <a href="/" className="text-color-default hover:text-primary">
                    Dev Blog
                  </a>
                </li>
                <li className="inline-block m-0 px-3 hidden">
                  <a href="/" className="text-color-default hover:text-primary">
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
