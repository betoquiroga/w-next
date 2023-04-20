import { ActiveLyricContext } from "src/common/context/ActiveLyricContext"
import LyricsService from "src/common/services/lyrics/lyrics.service"
import classNames from "classnames"
import { useContext, useEffect } from "react"
import { lyricEmit } from "@helpers/socket/emit"

const LyricsItem = ({ content, id }: LyricsItemProps) => {
  const { activeLyricId, setActiveLyricId } = useContext(ActiveLyricContext)
  const lyricsService = new LyricsService()

  const addMessage = () => {
    setActiveLyricId(id)
    lyricsService.setActive(id)
    lyricEmit(content)
  }

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "i") {
      console.log("Tecla I presionada")
    } else if (event.key === "k") {
      console.log("Tecla K presionada")
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp)
    return () => {
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

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
              "song-author":
                (i > 0 && id < 0) ||
                line.includes("(Hombres)") ||
                line.includes("(Mujeres)"),
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
