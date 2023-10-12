import ActionButton from "./ActionsPanel/ActionButton"
import { useEffect } from "react"
import { defaultStyle } from "src/common/constants/style"
import {
  activeLyricEmit,
  activeSongEmit,
  blackEmit,
  clearEmit,
  styleEmit,
} from "@helpers/socket/emit"
import {
  WW_BIBLE,
  WW_LOGO,
  WW_STYLES_FOLDER,
} from "src/common/constants/images"
import { desactivateAllSongs } from "src/common/api/songs/songs.api"
import { desactivateAllLyrics } from "src/common/api/songs/lyrics.api"

const ActionsSection = () => {
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "F3") blackEmit("black")
      if (event.key === "F4") handleAction(WW_LOGO as string)
      if (event.key === "F5") clearEmit("song")
      if (event.key === "F6") handleAction(WW_BIBLE as string)
    })
  }, [])

  const handleAction = (image: string) => {
    clearEmit("bible")
    styleEmit(defaultStyle(image, WW_STYLES_FOLDER))
  }

  const handleClickBlack = () => {
    desactivateAllSongs()
    activeSongEmit("0")
    desactivateAllLyrics()
    activeLyricEmit("0")
    blackEmit("black")
  }

  const handleClickLogo = () => {
    desactivateAllSongs()
    activeSongEmit("0")
    desactivateAllLyrics()
    activeLyricEmit("0")
    handleAction(WW_LOGO as string)
  }

  const handleClickClear = () => {
    desactivateAllSongs()
    activeSongEmit("0")
    desactivateAllLyrics()
    activeLyricEmit("0")
    clearEmit("song")
  }

  const handleClickPreach = () => {
    desactivateAllSongs()
    activeSongEmit("0")
    desactivateAllLyrics()
    activeLyricEmit("0")
    handleAction(WW_BIBLE as string)
  }

  return (
    <div className="bg-ww-content rounded col-span-2">
      <div className="flex justify-between w-full border-b-2 border-b-ww-alt">
        <span className="py-4">Acciones rapidas</span>
      </div>
      <div className="my-8">
        <ActionButton onClick={handleClickBlack} text="Pasar a negro - F3" />
        <ActionButton onClick={handleClickLogo} text="Enviar logotipo - F4" />
        <ActionButton onClick={handleClickClear} text="Limpiar pantalla - F5" />
        <ActionButton onClick={handleClickPreach} text="Modo prédica - F6" />
      </div>
    </div>
  )
}

export default ActionsSection
