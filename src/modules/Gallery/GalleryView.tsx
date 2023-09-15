import PreviewSection from "@modules/Songs/sections/PreviewSection"
import FilesSection from "./sections/FilesSection"

const GalleryView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 p-4 w-[calc(100%-2px)] justify-items-stretch pl-[5rem] grid-rows-none">
      <FilesSection />
      <PreviewSection />
    </div>
  )
}

export default GalleryView
