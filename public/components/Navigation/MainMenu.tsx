import { Bible, Config, Menu, Photo, Profile, Song } from "public/common/icons/index"
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
