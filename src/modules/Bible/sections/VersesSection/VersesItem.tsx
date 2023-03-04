import { Verse } from "src/common/interfaces/verses.interface"
import classNames from "classnames"
import { socket } from "socket/mainSocket"
import { useContext } from "react"
import { ChapterContext } from "@context/ChapterContext"
import { BookContext } from "@context/BookContext"

const VersesItem = ({ verseData }: VersesItemProps) => {
  const { verse, text } = verseData
  const { chapter } = useContext(ChapterContext)
  const { version } = useContext(BookContext)

  const handleClick = async () => {
    socket.emit("lyric", text)
    const data = {
      id: 0,
      title: "Declaración",
      type: "Imagen JPEG",
      details: "Manrope Black / 24px",
      image: "/images/styles/declaracion.jpg",
    }
    socket.emit("style", JSON.stringify(data))
    socket.emit(
      "verse",
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
