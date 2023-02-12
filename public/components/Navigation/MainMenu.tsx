import BibleIcon from "public/common/Icons/misc/bible"
import ConfigIcon from "public/common/Icons/misc/config"
import MenuIcon from "public/common/Icons/misc/menu"
import PhotoIcon from "public/common/Icons/misc/photo"
import ProfileIcon from "public/common/Icons/misc/profile"
import SongIcon from "public/common/Icons/misc/song"
import MainMenuItem from "./MainMenuItem"

const MainMenu = () => {
  return (
    <nav className="bg-ww-content text-ww-normal w-[4rem] fixed h-screen">
      <MainMenuItem icon={MenuIcon} />
      <MainMenuItem active icon={SongIcon} />
      <MainMenuItem icon={BibleIcon} />
      <MainMenuItem icon={PhotoIcon} />
      <MainMenuItem icon={ConfigIcon} />
      <MainMenuItem icon={ProfileIcon} />
    </nav>
  )
}

export default MainMenu
