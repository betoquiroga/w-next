import { SectionContext } from "@context/SectionContext"
import Link from "next/link"
import { MouseEventHandler, useContext, useEffect, useState } from "react"

const MainMenuResponsive = ({ openClose }: toggleOpenProps) => {
  const { setActiveSection } = useContext(SectionContext)

  const [isSelect, setIsSelect] = useState<string>(() => {
    return localStorage.getItem("menu-select") || "songs"
  })

  const handleClick = (clickedSelect: string) => {
    setIsSelect(clickedSelect)
    localStorage.setItem("menu-select", clickedSelect)
  }

  useEffect(() => {
    const storedSelect = localStorage.getItem("menu-select")
    if (storedSelect) {
      setIsSelect(storedSelect)
    }
  }, [])

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
        className="flex flex-col items-center justify-center responsive-link"
        onClick={openClose}
      >
        <div
          className={`menu-select py-4 ${
            isSelect === "songs" ? "text-ww-green-600" : ""
          }`}
          onClick={() => handleClick("songs")}
        >
          <Link
            className="py-20"
            href={"/songs"}
            onClick={() => {
              setActiveSection(1)
            }}
          >
            Canciones
          </Link>
        </div>
        <div
          className={`menu-select py-4 ${
            isSelect === "bible" ? "text-ww-green-600" : ""
          }`}
          onClick={() => handleClick("bible")}
        >
          <Link
            className=""
            href={"/bible"}
            onClick={() => {
              setActiveSection(2)
            }}
          >
            Biblia
          </Link>
        </div>
        <div
          className={`menu-select py-4 ${
            isSelect === "gallery" ? "text-ww-green-600" : ""
          }`}
          onClick={() => handleClick("gallery")}
        >
          <Link
            className=""
            href={"/gallery"}
            onClick={() => {
              setActiveSection(3)
            }}
          >
            Galería
          </Link>
        </div>
        <div
          className={`menu-select py-4 ${
            isSelect === "admin" ? "text-ww-green-600" : ""
          }`}
          onClick={() => handleClick("admin")}
        >
          <Link
            className=""
            href={"/admin"}
            onClick={() => {
              setActiveSection(4)
            }}
          >
            Administración
          </Link>
        </div>
        <div
          className={`menu-select py-4 ${
            isSelect === "profile" ? "text-ww-green-600" : ""
          }`}
          onClick={() => handleClick("profile")}
        >
          <Link
            className=""
            href={"/"}
            onClick={() => {
              setActiveSection(5)
            }}
          >
            Perfil
          </Link>
        </div>
      </div>
    </>
  )
}

interface toggleOpenProps {
  openClose: MouseEventHandler
}

export default MainMenuResponsive
