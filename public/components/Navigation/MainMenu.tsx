"use client"
import BibleIcon from "@icons/misc/bible"
import ConfigIcon from "@icons/misc/config"
import MenuIcon from "@icons/misc/menu"
import PhotoIcon from "@icons/misc/photo"
import ProfileIcon from "@icons/misc/profile"
import SongIcon from "@icons/misc/song"
import MainMenuItem from "./MainMenuItem"

const MainMenu = () => {
  return (
    <nav className="bg-ww-content text-ww-normal w-[4rem] fixed h-screen">
      <MainMenuItem icon={MenuIcon} href="/" />
      <MainMenuItem icon={SongIcon} href="/songs" />
      <MainMenuItem icon={BibleIcon} href="/bible" />
      <MainMenuItem icon={PhotoIcon} href="/" />
      <MainMenuItem icon={ConfigIcon} href="/" />
      <MainMenuItem icon={ProfileIcon} href="/" />
    </nav>
  )
}

export default MainMenu
