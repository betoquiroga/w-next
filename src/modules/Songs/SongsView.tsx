import LyricsSection from "./sections/LyricsSection"
import PreviewSection from "./sections/PreviewSection"
import SongsSection from "./sections/SongsSection"
import StyleSection from "./sections/StyleSection"

const SongsView = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 w-full justify-items-stretch pl-[5rem] min-w-[98rem] h-[100vh] grid-rows-none">
      <SongsSection />
      <LyricsSection />
      <StyleSection />
      <PreviewSection />
    </div>
  )
}

export default SongsView
