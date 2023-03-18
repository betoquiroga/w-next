import PreviewSection from "@modules/Songs/sections/PreviewSection"
import FilesSection from "./sections/FilesSection"

const GalleryView = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 w-[calc(100%-2px)] justify-items-stretch pl-[5rem] h-[calc(100vh-1px)] grid-rows-none">
      <FilesSection />
      <PreviewSection />
    </div>
  )
}

export default GalleryView
