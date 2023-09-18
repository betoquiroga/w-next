import FilesSection from "./sections/FilesSection"
import PreviewSection from "./sections/PreviewSection"

const GalleryView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 p-4 w-[calc(100%-2px)] justify-items-stretch lg:pl-[5rem] grid-rows-none">
      <FilesSection />
      <PreviewSection />
    </div>
  )
}

export default GalleryView
