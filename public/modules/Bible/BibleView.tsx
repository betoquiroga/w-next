import BooksSection from "./sections/BooksSection"
import ChaptersSection from "./sections/ChaptersSection"
import PreviewSection from "./sections/PreviewSection"
import VersesSection from "./sections/VersesSection"

const BibleView = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 w-full justify-items-stretch pl-[5rem] min-w-[98rem] h-[100vh] grid-rows-none">
      <BooksSection />
      <ChaptersSection />
      <VersesSection />
      <PreviewSection />
    </div>
  )
}

export default BibleView
