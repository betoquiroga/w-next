"use client"
import BibleIcon from "src/common/icons/misc/bible"
import ConfigIcon from "src/common/icons/misc/config"
import MenuIcon from "src/common/icons/misc/menu"
import PhotoIcon from "src/common/icons/misc/photo"
import ProfileIcon from "src/common/icons/misc/profile"
import SongIcon from "src/common/icons/misc/song"
import MainMenuItem from "./MainMenuItem"

const MainMenu = () => {
  return (
    <>
      <nav className="bg-ww-content text-ww-normal w-[4rem] fixed h-screen hidden lg:block">
        <MainMenuItem icon={MenuIcon} href="/" />
        <MainMenuItem icon={SongIcon} href="/songs" />
        <MainMenuItem icon={BibleIcon} href="/bible" />
        <MainMenuItem icon={PhotoIcon} href="/gallery" />
        <MainMenuItem icon={ConfigIcon} href="/admin" />
        <MainMenuItem icon={ProfileIcon} href="/" />
      </nav>
    </>
  )
}

export default MainMenu
