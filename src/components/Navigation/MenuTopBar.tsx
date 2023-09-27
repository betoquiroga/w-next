"use client"
import BurgerMenu from "@icons/menuResponsive/burger-menu"
import { useState } from "react"

const MenuTopBar = ({ children }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className="pr-18 transition py-6 px-6 hover:bg-ww-alt"
        onClick={toggleOpen}
      >
        <BurgerMenu openClose={toggleOpen} isOpen={isOpen} />
      </div>
      {children}
    </>
  )
}

type MenuProps = {
  children: React.ReactNode
}

export default MenuTopBar
