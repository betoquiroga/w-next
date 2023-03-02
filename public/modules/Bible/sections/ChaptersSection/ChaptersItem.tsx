import { BookContext } from "@context/BookContext"
import { ChapterContext } from "@context/ChapterContext"
import { useContext } from "react"

const ChaptersItem = ({ chapter }: ChaptersItemProps) => {
  const { book } = useContext(BookContext)
  const { setChapter } = useContext(ChapterContext)

  const handleClick = async () => {
    setChapter({
      chapter,
      book,
    })
  }

  return (
    <div
      onClick={handleClick}
      className="flex justify-center self-center bg-ww-scroll text-3xl p-4 hover:bg-ww-green-700 cursor-pointer"
    >
      <span>{chapter}</span>
    </div>
  )
}

type ChaptersItemProps = {
  chapter: number
}

export default ChaptersItem
