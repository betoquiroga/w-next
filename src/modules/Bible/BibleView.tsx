import { ChapterContext } from "@context/ChapterContext"
import { useContext } from "react"
import BooksSection from "./sections/BooksSection"
import ChaptersSection from "./sections/ChaptersSection"
import PreviewSection from "./sections/PreviewSection"
import VersesSection from "./sections/VersesSection"

const BibleView = () => {
  const { setNextVerse, setPrevVerse } = useContext(ChapterContext)

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "k") {
      setNextVerse()
    }
    if (event.key === "i") {
      setPrevVerse()
    }
  }

  return (
    <div
      onKeyDown={handleKeyPress}
      className="grid grid-cols-12 gap-4 p-4 w-[calc(100%-2px)] justify-items-stretch pl-[5rem] h-[calc(100vh-1px)] grid-rows-none"
    >
      <BooksSection />
      <ChaptersSection />
      <VersesSection />
      <PreviewSection />
    </div>
  )
}

export default BibleView
