import { ActiveLyricContext } from "src/common/context/ActiveLyricContext"
import LyricsService from "src/common/services/lyrics/lyrics.service"
import classNames from "classnames"
import { useContext } from "react"
import { socket } from "socket/mainSocket"

const LyricsItem = ({ content, id }: LyricsItemProps) => {
  const { activeLyricId, setActiveLyricId } = useContext(ActiveLyricContext)
  const lyricsService = new LyricsService()
  const addMessage = (e: React.SyntheticEvent) => {
    setActiveLyricId(id)
    if (id > 0) lyricsService.setActive(id)
    socket.emit("lyric", e.currentTarget.innerHTML)
    socket.emit("verse", "")
  }

  return (
    <div
      className={classNames("song hover:bg-ww-alt cursor-pointer", {
        "bg-ww-green-800 hover:bg-ww-green-800": activeLyricId === id,
      })}
    >
      <p
        className={classNames("text-ww-normal p-4", {
          "text-ww-green-300": id < 0,
        })}
        onClick={addMessage}
      >
        {content.split("\n").map((line, i) => (
          <span
            key={line}
            className={classNames("flex", {
              "song-author": i > 0 && id < 0,
              "song-chroma": id < 0,
            })}
          >
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
