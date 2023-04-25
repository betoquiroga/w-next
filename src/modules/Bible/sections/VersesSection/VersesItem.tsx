import { Verse } from "src/common/interfaces/verses.interface"
import classNames from "classnames"
import { useContext } from "react"
import { ChapterContext } from "@context/ChapterContext"
import { BookContext } from "@context/BookContext"
import { bibleEmit, styleEmit, verseEmit } from "@helpers/socket/emit"
import { defaultStyle } from "src/common/constants/style"
import { WW_BIBLE } from "src/common/constants/images"

const VersesItem = ({ verseData }: VersesItemProps) => {
  const { verse, text } = verseData
  const { chapter } = useContext(ChapterContext)
  const { version } = useContext(BookContext)

  const handleClick = async () => {
    bibleEmit(text)
    styleEmit(defaultStyle(WW_BIBLE as string))
    verseEmit(
      `${chapter.book.title} ${chapter.chapter}:${verse} (${version.abbreviation})`
    )
  }

  return (
    <div
      onClick={handleClick}
      className={classNames(
        "book p-2 border-t-2 border-t-ww-alt hover:bg-ww-alt cursor-pointer flex items-center justify-items-stretch",
        { " hover:bg-ww-green-800": true }
      )}
    >
      <div
        className={classNames(
          "flex justify-center self-center h-full min-w-[6rem] text-3xl p-4",
          {
            "bg-ww-green-700": false,
            "bg-ww-scroll": true,
          }
        )}
      >
        <span>{verse}</span>
      </div>
      <div className="pl-4">
        <span>{text}</span>
      </div>
    </div>
  )
}

type VersesItemProps = {
  verseData: Verse
}

export default VersesItem
