import ActionsSection from "./sections/ActionsSection"
import LiveSection from "./sections/LiveSection"
import LyricsSection from "./sections/LyricsSection"
import PreviewSection from "./sections/PreviewSection"
import SongsSection from "./sections/SongsSection"
import StyleSection from "./sections/StyleSection"

const SongsView = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 w-full justify-items-stretch pl-[5rem] grid-rows-[47rem_minmax(18rem,_1fr)]">
      <SongsSection />
      <LyricsSection />
      <StyleSection />
      <PreviewSection />
      <LiveSection />
      <ActionsSection />
    </div>
  )
}

export default SongsView
