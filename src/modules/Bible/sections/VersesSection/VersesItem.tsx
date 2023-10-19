import { Verse } from "src/common/interfaces/verses.interface"
import classNames from "classnames"
import { useContext } from "react"
import { ChapterContext } from "@context/ChapterContext"
import { BookContext } from "@context/BookContext"
import { bibleEmit, clearEmit, styleEmit } from "@helpers/socket/emit"
import { defaultStyle } from "src/common/constants/style"
import {
  WW_BIBLE,
  WW_DEFAULT_STYLE_ID,
  WW_STYLES_FOLDER,
} from "src/common/constants/images"
import { setActiveStyle } from "src/common/api/styles/styles.api"
import { deactivateSongs } from "@modules/Songs/helper/deactivateSong"

const VersesItem = ({ verseData }: VersesItemProps) => {
  const { verse, text } = verseData
  const { chapter, activeVerse, setActiveVerse } = useContext(ChapterContext)
  const { version } = useContext(BookContext)

  const handleClick = async () => {
    const currentVerse = {
      verse,
      text,
    }
    setActiveVerse(currentVerse)
    localStorage?.setItem("currentVerse", JSON.stringify(currentVerse))
    bibleEmit(
      text,
      `${chapter.book.title} ${chapter.chapter}:${verse} (${version.abbreviation})`
    )
    styleEmit(defaultStyle(WW_BIBLE as string, WW_STYLES_FOLDER), "style")
    setActiveStyle(Number(WW_DEFAULT_STYLE_ID))
    deactivateSongs()
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
            "bg-ww-green-700": verseData?.text === activeVerse?.text,
            "bg-ww-scroll": verseData?.text !== activeVerse?.text,
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
