"use client"
import BibleIcon from "src/common/icons/misc/bible"
import ConfigIcon from "src/common/icons/misc/config"
import MenuIcon from "src/common/icons/misc/menu"
import PhotoIcon from "src/common/icons/misc/photo"
import ProfileIcon from "src/common/icons/misc/profile"
import SongIcon from "src/common/icons/misc/song"
import MainMenuItem from "./MainMenuItem"
import MenuNav from "./MenuNav"
import { useState } from "react"
import MenuIconNav from "@icons/misc/menu-nav"
import MainMenuItemNav from "./MainMenuItemNav"

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const togleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="bg-ww-content text-ww-normal w-[4rem] fixed h-screen hidden md:block">
        <MainMenuItem icon={MenuIcon} href="/" />
        <MainMenuItem icon={SongIcon} href="/songs" />
        <MainMenuItem icon={BibleIcon} href="/bible" />
        <MainMenuItem icon={PhotoIcon} href="/gallery" />
        <MainMenuItem icon={ConfigIcon} href="/admin" />
        <MainMenuItem icon={ProfileIcon} href="/" />
      </nav>
      <div className="px-8 h-15 bg-white text:black relative md:hidden">
        <MainMenuItemNav icon={MenuIconNav} href="/" />
      </div>
      <div className="h-screen flex flex-col grid grid-rows-5 text-center items-center bg-black md:hidden">
        <MenuNav />
      </div>
    </>
  )
}

export default MenuIconNav
