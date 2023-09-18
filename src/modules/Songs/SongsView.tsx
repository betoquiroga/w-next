import { ActiveLyricContext } from "@context/ActiveLyricContext"
import { useContext } from "react"
import withAuth from "src/common/hoc/withAuth"
import LyricsSection from "./sections/LyricsSection"
import PreviewSection from "./sections/PreviewSection"
import SongsSection from "./sections/SongsSection"
import StyleSection from "./sections/StyleSection"

const SongsView = () => {
  const { setNextSongVerse, setPrevSongVerse } = useContext(ActiveLyricContext)

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "x") {
      setNextSongVerse()
    }
    if (event.key === "z") {
      setPrevSongVerse()
    }
  }
  return (
    <div
      onKeyDown={handleKeyPress}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 p-4 w-[calc(100%-2px)] justify-items-stretch lg:pl-[5rem] grid-rows-none"
    >
      <SongsSection />
      <LyricsSection />
      <StyleSection />
      <PreviewSection />
    </div>
  )
}

export default withAuth(SongsView)
