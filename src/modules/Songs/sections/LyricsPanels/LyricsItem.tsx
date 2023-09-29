import { ActiveLyricContext } from "src/common/context/ActiveLyricContext"
import LyricsService from "src/common/services/lyrics/lyrics.service"
import classNames from "classnames"
import { useContext, useEffect } from "react"
import { coverEmit, lyricEmit, styleEmit } from "@helpers/socket/emit"
import { Style } from "@interfaces/style.interface"
import { currentImageUrl, defaultStyle } from "src/common/constants/style"
import { WW_STYLES_FOLDER } from "src/common/constants/images"
import { StyleContext } from "@context/StyleContext"
import { WW_DEFAULT_SCREEN_ID } from "src/common/constants/screen"
import { updateScreen } from "src/common/api/screen/screen.api"

const LyricsItem = ({ content, id, cover, idSong, style }: LyricsItemProps) => {
  const { activeLyricId, setActiveLyricId } = useContext(ActiveLyricContext)
  const { setStyle } = useContext(StyleContext)
  const lyricsService = new LyricsService()

  const addMessage = () => {
    setActiveLyricId(id)
    lyricsService.setActive(id)
    cover ? coverEmit(content) : lyricEmit(content)
  }
  useEffect(() => {
    if (style !== null && style !== undefined) {
      const image = style.image
      styleEmit(defaultStyle(image, WW_STYLES_FOLDER))
      setStyle({ ...style, image: currentImageUrl(image) })
      updateScreen(WW_DEFAULT_SCREEN_ID, {
        verse: " ",
      })
    }
  }, [style])

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
  idSong?: number
  style?: Style | null
}

export default LyricsItem
