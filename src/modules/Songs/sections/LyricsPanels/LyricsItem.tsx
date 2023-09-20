import { ActiveLyricContext } from "src/common/context/ActiveLyricContext"
import LyricsService from "src/common/services/lyrics/lyrics.service"
import classNames from "classnames"
import { useContext } from "react"
import { coverEmit, lyricEmit } from "@helpers/socket/emit"

const LyricsItem = ({ content, id, cover }: LyricsItemProps) => {
  const { activeLyricId, setActiveLyricId } = useContext(ActiveLyricContext)
  const lyricsService = new LyricsService()

  const addMessage = () => {
    setActiveLyricId(id)
    lyricsService.setActive(id)
    cover ? coverEmit(content) : lyricEmit(content)
  }

  return (
    <div
      className={classNames(
        "song text-ww-normal hover:bg-ww-alt cursor-pointer",
        {
          "bg-ww-green-800 hover:bg-ww-green-800": activeLyricId === id,
        }
      )}
    >
      <p
        className={classNames(" p-4", {
          "text-ww-green-400": id < 0,
        })}
        onClick={addMessage}
      >
        {content.split("\n").map((line, i) => (
          <span key={`${line[0]}-${i}`} className="flex">
            {line}
          </span>
        ))}
      </p>
    </div>
  )
}

type LyricsItemProps = {
  id: number
  content: string
  cover?: boolean
}

export default LyricsItem
