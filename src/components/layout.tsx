import * as React from "react"
import { Link } from "gatsby"
import TopBar from "./TopBar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <TopBar />
      {/*<header className="global-header">{header}</header>*/}
      <main>{children}</main>
      <footer className="container text-sm opacity-80 text-center">
        © {new Date().getFullYear()}, Code with ❤️ by
        {` `}
        Krzysztof Furtak
      </footer>
    </div>
  )
}

export default Layout
