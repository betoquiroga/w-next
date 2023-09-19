import { useContext } from "react"
import FilesSection from "./sections/FilesSection"
import PreviewSection from "./sections/PreviewSection"
import { SectionContext } from "@context/SectionContext"

const GalleryView = () => {
  const { activeSection } = useContext(SectionContext)
  return (
    <div className={`gallery-section ${activeSection !== 3}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 p-4 w-[calc(100%-2px)] justify-items-stretch lg:pl-[5rem] grid-rows-none">
        <FilesSection />
        <PreviewSection />
      </div>
    </div>
  )
}

export default GalleryView
