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
