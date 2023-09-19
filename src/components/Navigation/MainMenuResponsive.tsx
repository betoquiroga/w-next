import { SectionContext } from "@context/SectionContext"
import Link from "next/link"
import { useContext } from "react"

const MainMenuResponsive = () => {
  const { setActiveSection } = useContext(SectionContext)
  return (
    <>
      <div className="transition hover:bg-ww-alt w-screen h-[4rem] mt-4">
        <svg
          width="30"
          height="30"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.25 1.5C0.25 1.08579 0.585786 0.75 1 0.75H13C13.4142 0.75 13.75 1.08579 13.75 1.5C13.75 1.91421 13.4142 2.25 13 2.25H1C0.585786 2.25 0.25 1.91421 0.25 1.5ZM0.25 6C0.25 5.58579 0.585786 5.25 1 5.25H13C13.4142 5.25 13.75 5.58579 13.75 6C13.75 6.41421 13.4142 6.75 13 6.75H1C0.585786 6.75 0.25 6.41421 0.25 6ZM0.25 10.5C0.25 10.0858 0.585786 9.75 1 9.75H13C13.4142 9.75 13.75 10.0858 13.75 10.5C13.75 10.9142 13.4142 11.25 13 11.25H1C0.585786 11.25 0.25 10.9142 0.25 10.5Z"
            fill="#D9F5EE"
          />
        </svg>
      </div>
      <div className="px-80 flex flex-col items-center justify-center">
        <Link
          className="w-full py-5 text-5xl"
          href={"/songs"}
          onClick={() => {
            setActiveSection(1)
          }}
        >
          Canciones
        </Link>
        <Link
          className="w-full py-5 text-5xl"
          href={"/bible"}
          onClick={() => {
            setActiveSection(2)
          }}
        >
          Biblia
        </Link>
        <Link
          className="w-full py-5 text-5xl"
          href={"/gallery"}
          onClick={() => {
            setActiveSection(3)
          }}
        >
          Galería
        </Link>
        <Link
          className="w-full py-5 text-5xl"
          href={"/admin"}
          onClick={() => {
            setActiveSection(4)
          }}
        >
          Administración
        </Link>
        <Link
          className="w-full py-5 text-5xl"
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

export default MainMenuResponsive
