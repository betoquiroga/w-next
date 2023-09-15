"use client"
import { MouseEventHandler } from "react"

const MenuNavResponsive = ({ openClose }: toggleOpenProps) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm">
      <div
        className="flex items-center px-4 cursor-pointer lg:hidden"
        onClick={openClose}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.25 1.5C0.25 1.08579 0.585786 0.75 1 0.75H13C13.4142 0.75 13.75 1.08579 13.75 1.5C13.75 1.91421 13.4142 2.25 13 2.25H1C0.585786 2.25 0.25 1.91421 0.25 1.5ZM0.25 6C0.25 5.58579 0.585786 5.25 1 5.25H13C13.4142 5.25 13.75 5.58579 13.75 6C13.75 6.41421 13.4142 6.75 13 6.75H1C0.585786 6.75 0.25 6.41421 0.25 6ZM0.25 10.5C0.25 10.0858 0.585786 9.75 1 9.75H13C13.4142 9.75 13.75 10.0858 13.75 10.5C13.75 10.9142 13.4142 11.25 13 11.25H1C0.585786 11.25 0.25 10.9142 0.25 10.5Z"
            fill="#000000"
          />
        </svg>
        <div className="ml-8 flex space-x-4">
          <div>
            <button className="ww-button-nav-responsive">Canciones</button>
            <button className="ww-button-nav-responsive">Letra</button>
            <button className="ww-button-nav-responsive">Estilos</button>
            <button className="ww-button-nav-responsive">Vista previa</button>
          </div>
          {/* <div>
            <button className="ww-button-nav-responsive">Libros</button>
            <button className="ww-button-nav-responsive">Capítulos</button>
            <button className="ww-button-nav-responsive">Versículos</button>
            <button className="ww-button-nav-responsive">Vista previa</button>
          </div>
          <div>
            <button className="ww-button-nav-responsive">Imágenes</button>
            <button className="ww-button-nav-responsive">Vista previa</button>
          </div> */}

          {/* <div>
            <button className="ww-button-nav-responsive">Canciones</button>
            <button className="ww-button-nav-responsive">Vista previa</button>
          </div>
          <div>
            <button className="ww-button-nav-responsive">Libros</button>
            <button className="ww-button-nav-responsive">Vista previa</button>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

interface toggleOpenProps {
  openClose: MouseEventHandler
}

export default MenuNavResponsive
