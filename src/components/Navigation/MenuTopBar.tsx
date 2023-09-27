"use client"
import BurgerMenu from "@icons/menuResponsive/burger-menu"
import { useState } from "react"

const MenuTopBar = ({ children }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex h-[4rem] text:black lg:hidden w-full bg-ww-content">
      <BurgerMenu toggleOpen={toggleOpen} isOpen={isOpen} />
      {children}
    </nav>
  )
}

type MenuProps = {
  children?: React.ReactNode
}

export default MenuTopBar
