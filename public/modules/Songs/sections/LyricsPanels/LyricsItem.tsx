import { ActiveLyricContext } from "@context/ActiveLyricContext"
import LyricsService from "@services/lyrics/lyrics.service"
import classNames from "classnames"
import { useContext } from "react"
import { socket } from "socket/mainSocket"

const LyricsItem = ({ content, id }: LyricsItemProps) => {
  const { activeLyricId, setActiveLyricId } = useContext(ActiveLyricContext)
  const lyricsService = new LyricsService()
  const addMessage = (e: React.SyntheticEvent) => {
    setActiveLyricId(id)
    lyricsService.setActive(id)
    socket.emit("lyric", e.currentTarget.innerHTML)
  }

  return (
    <div
      className={classNames("song hover:bg-ww-alt cursor-pointer", {
        "bg-ww-green-800 hover:bg-ww-green-800": activeLyricId === id,
      })}
    >
      <p className="text-ww-normal p-4" onClick={addMessage}>
        {content.split("\n").map((line) => (
          <span key={line} className="flex">
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
}

export default LyricsItem
