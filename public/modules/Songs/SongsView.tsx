import LyricsSection from "./sections/LyricsSection"
import PreviewSection from "./sections/PreviewSection"
import SongsSection from "./sections/SongsSection"
import StyleSection from "./sections/StyleSection"

const SongsView = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-4 gap-4 p-4 w-full min-h-[40rem] justify-items-stretch h-screen pl-[5rem]">
      <SongsSection />
      <LyricsSection />
      <StyleSection />
      <PreviewSection />
      <div className="bg-ww-content rounded col-span-10"></div>
      <div className="bg-ww-content rounded col-span-2"></div>
    </div>
  )
}

export default SongsView
