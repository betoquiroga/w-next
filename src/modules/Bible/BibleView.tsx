import { ChapterContext } from "@context/ChapterContext"
import { useContext } from "react"
import BooksSection from "./sections/BooksSection"
import ChaptersSection from "./sections/ChaptersSection"
import PreviewSection from "./sections/PreviewSection"
import VersesSection from "./sections/VersesSection"

const BibleView = () => {
  const { setNextVerse, setPrevVerse } = useContext(ChapterContext)

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "x") {
      setNextVerse()
    }
    if (event.key === "z") {
      setPrevVerse()
    }
  }

  return (
    <div
      onKeyDown={handleKeyPress}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 p-4 w-[calc(100%-2px)] justify-items-stretch pl-[5rem] grid-rows-none"
    >
      <BooksSection />
      <ChaptersSection />
      <VersesSection />
      <PreviewSection />
    </div>
  )
}

export default BibleView
