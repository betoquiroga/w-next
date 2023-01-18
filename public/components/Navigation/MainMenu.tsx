import Bible from "@icons/bible"
import Config from "@icons/config"
import Menu from "@icons/menu"
import Photo from "@icons/photo"
import Profile from "@icons/profile"
import Song from "@icons/song"
import MainMenuItem from "./MainMenuItem"

const MainMenu = () => {
  return (
    <nav className="bg-ww-content text-ww-normal w-[4rem] fixed h-screen">
      <MainMenuItem icon={Menu} />
      <MainMenuItem active icon={Song} />
      <MainMenuItem icon={Bible} />
      <MainMenuItem icon={Photo} />
      <MainMenuItem icon={Config} />
      <MainMenuItem icon={Profile} />
    </nav>
  )
}

export default MainMenu
