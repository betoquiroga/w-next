import MainMenuResponsive from "@components/Navigation/MainMenuResponsive"
import { MouseEventHandler, useContext } from "react"
import { ColumnContext } from "@context/ColumnContext"
import { SectionContext } from "@context/SectionContext"
import MenuIconsSongResponsive from "./MenuIconsSongResponsive"
import MenuIconsBibleResponsive from "./MenuIconsBibleResponsive"
import MenuIconsGalleryResponsive from "./MenuIconsGalleryResponsive"

const MenuNavResponsive = ({ openClose, isOpen }: toggleOpenProps) => {
  const { setActiveColumn } = useContext(ColumnContext)
  const { activeSection } = useContext(SectionContext)
  return (
    <>
      <nav className="flex justify-between items-center w-screen h-[4rem]">
        <div className="flex items-center cursor-pointer">
          <div
            onClick={openClose}
            className="pr-18 transition py-6 px-6 hover:bg-ww-alt"
          >
            <svg
              width="23"
              height="23"
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
          {activeSection === 1 && (
            <MenuIconsSongResponsive setActiveColumn={setActiveColumn} />
          )}
          {activeSection === 2 && (
            <MenuIconsBibleResponsive setActiveColumn={setActiveColumn} />
          )}
          {activeSection === 3 && (
            <MenuIconsGalleryResponsive setActiveColumn={setActiveColumn} />
          )}
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-black text-white z-10 general-section ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <MainMenuResponsive openClose={openClose} />
      </div>
    </>
  )
}
interface toggleOpenProps {
  openClose: MouseEventHandler
  isOpen: boolean
}

export default MenuNavResponsive
