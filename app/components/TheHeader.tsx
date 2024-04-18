import { Navigation } from "./Navigation"

const TheHeader = () => {

const NavItems = [
  {label: "Home", href: "/"},
  {label: "Blog", href: "/blog"},
  {label: "About", href: "/about"},
]

  return (
    <header>
      <Navigation navLinks={NavItems}/>
    </header>
  )
}

export {TheHeader}
