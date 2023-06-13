import { BookContext } from "src/common/context/BookContext"
import { ChapterContext } from "src/common/context/ChapterContext"
import { useContext, useEffect } from "react"
import classNames from "classnames"

const ChaptersItem = (props: ChaptersItemProps) => {
  const { book } = useContext(BookContext)
  const { chapter, setChapter } = useContext(ChapterContext)

  const handleClick = async () => {
    setChapter({
      chapter: props.chapter,
      book,
    })
    localStorage.setItem("currentChapter", JSON.stringify(chapter))
  }

  useEffect(() => {
    localStorage.setItem("currentChapter", JSON.stringify(chapter))
  }, [chapter])

  return (
    <div
      onClick={handleClick}
      className={classNames(
        "flex justify-center self-center text-3xl p-4 hover:bg-ww-green-700 cursor-pointer",
        {
          "bg-ww-green-700": chapter.chapter === props.chapter,
          "bg-ww-scroll": chapter.chapter !== props.chapter,
        }
      )}
    >
      <span>{props.chapter}</span>
    </div>
  )
}

type ChaptersItemProps = {
  chapter: number
}

export default ChaptersItem
