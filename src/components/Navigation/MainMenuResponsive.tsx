import { SectionContext } from "@context/SectionContext"
import Link from "next/link"
import { MouseEventHandler, useContext } from "react"

const MainMenuResponsive = ({ openClose }: toggleOpenProps) => {
  const { setActiveSection } = useContext(SectionContext)
  return (
    <>
      <div className="pr-4 cursor-pointer py-5 px-8" onClick={openClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div
        className="flex flex-col items-center justify-center"
        onClick={openClose}
      >
        <Link
          className="responsive-link"
          href={"/songs"}
          onClick={() => {
            setActiveSection(1)
          }}
        >
          Canciones
        </Link>
        <Link
          className="responsive-link"
          href={"/bible"}
          onClick={() => {
            setActiveSection(2)
          }}
        >
          Biblia
        </Link>
        <Link
          className="responsive-link"
          href={"/gallery"}
          onClick={() => {
            setActiveSection(3)
          }}
        >
          Galería
        </Link>
        <Link
          className="responsive-link"
          href={"/admin"}
          onClick={() => {
            setActiveSection(4)
          }}
        >
          Administración
        </Link>
        <Link
          className="responsive-link"
          href={"/"}
          onClick={() => {
            setActiveSection(5)
          }}
        >
          Perfil
        </Link>
      </div>
    </>
  )
}

interface toggleOpenProps {
  openClose: MouseEventHandler
}

export default MainMenuResponsive
