import { useContext, useEffect, useState } from "react"
import { StyleContext } from "src/common/context/StyleContext"
import { Style } from "src/common/interfaces/style.interface"
import { Effect } from "@interfaces/effect.interface"
import { Emit } from "@interfaces/emit.interface"
import { getScreenActive } from "src/common/api/screen/screen.api"
import { socket } from "socket/mainSocket"
import { WW_STYLES_FOLDER, defaultStyle } from "src/common/constants/style"
import { WW_GALLERY_FOLDER } from "../constants/images"

export function useHome() {
  const { style } = useContext(StyleContext)
  const [content, setContent] = useState<Emit>({ content: "" } as Emit)
  const [styleData, setStyleData] = useState<Style>(style)
  const [bibleVerse, setBibleVerse] = useState<string>("")
  const [effectsWs, setEffectsWs] = useState<Effect>({
    zoom: false,
    particles: false,
  })
  const [black, setBlack] = useState<boolean>(false)
  const validTypes: Emit["type"][] = [
    "bible",
    "black",
    "songCover",
    "gallery",
    "lyric",
    "style",
  ]

  useEffect(() => {
    const handleLyricMessage = (message: string) => {
      if (message) setContent(JSON.parse(message))
      console.log(message)
    }

    const handleStyleMessage = (data: string) => {
      setStyleData(JSON.parse(data))
    }

    const handleVerseMessage = (verse: string) => {
      if (verse) setBibleVerse(JSON.parse(verse))
    }

    const handleEffectsMessage = (data: string) => {
      setEffectsWs(JSON.parse(data))
    }

    socket.on("song", handleLyricMessage)
    socket.on("style", handleStyleMessage)
    socket.on("verse", handleVerseMessage)
    socket.on("effects", handleEffectsMessage)

    return () => {
      socket.off("song", handleLyricMessage)
      socket.off("style", handleStyleMessage)
      socket.off("verse", handleVerseMessage)
      socket.off("effects", handleEffectsMessage)
    }
  }, [])

  useEffect(() => {
    if (content.type === "black") {
      setBlack(true)
    } else {
      setBlack(false)
    }
  }, [content])

  useEffect(() => {
    const fetchScreenData = async () => {
      try {
        const screenData = await getScreenActive()
        const type = screenData.type || "lyric"
        console.log(screenData.typeStyle)

        if (!validTypes.includes(type)) {
          console.error("Tipo de pantalla no válido:", type)
          return
        }

        setContent({
          type,
          content: screenData.content || "",
        })

        setBibleVerse(screenData.verse || "")

        setStyleData(
          defaultStyle(
            screenData.background || "",
            screenData.typeStyle === "gallery"
              ? WW_GALLERY_FOLDER
              : WW_STYLES_FOLDER
          )
        )
      } catch (error) {
        console.error("Error al obtener datos del Screen:", error)
      }
    }

    fetchScreenData()
  }, [])

  return { content, styleData, bibleVerse, effectsWs, black }
}
