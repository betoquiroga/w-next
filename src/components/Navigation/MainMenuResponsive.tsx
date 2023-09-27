import CloseMenu from "@icons/menuResponsive/close-menu"
import Link from "next/link"
import { MouseEventHandler } from "react"

const MainMenuResponsive = ({ toggleOpen }: toggleOpenProps) => {
  return (
    <>
      <div className="pr-4 cursor-pointer py-5 px-8" onClick={toggleOpen}>
        <CloseMenu />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link className="responsive-link" href={"/songs"}>
          Canciones
        </Link>
        <Link className="responsive-link" href={"/bible"}>
          Biblia
        </Link>
        <Link className="responsive-link" href={"/gallery"}>
          Galería
        </Link>
        <Link className="responsive-link" href={"/admin"}>
          Administración
        </Link>
        <Link className="responsive-link" href={"/"}>
          Perfil
        </Link>
      </div>
    </>
  )
}

interface toggleOpenProps {
  toggleOpen: MouseEventHandler
}

export default MainMenuResponsive
