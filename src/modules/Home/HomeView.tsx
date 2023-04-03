"use client"

import { useContext, useEffect, useState } from "react"
import { socket } from "../../../socket/mainSocket"
import ReactHtmlParser from "react-html-parser"
import { StyleContext } from "src/common/context/StyleContext"
import { Style } from "src/common/interfaces/style.interface"
import DynamicFontSize from "./DynamicText"

const HomeView = () => {
  const { style } = useContext(StyleContext)
  const [content, setContent] = useState<string>("")
  const [styleData, setStyleData] = useState<Style>(style)
  const [bibleVerse, setBibleVerse] = useState<string>("")

  useEffect(() => {
    socket.on("lyric", (message: string) => {
      setContent(message)
    })
    socket.on("style", (data: string) => {
      setStyleData(JSON.parse(data))
    })
    socket.on("verse", (data: string) => {
      setBibleVerse(data)
    })
  }, [])

  return (
    <div className={"prueba bg-cover"}>
      <div className="verse fixed z-50 top-0 text-center w-full py-6">
        {bibleVerse}
      </div>
      <div className="wallpaper">
        {styleData.type === "Video" && (
          <video
            id="video-player"
            autoPlay
            muted
            loop
            className="main-video"
            src={styleData.image}
          />
        )}
        {styleData.type.includes("Imagen") && (
          <img src={styleData.image} alt={style.title} />
        )}
      </div>
      <DynamicFontSize text={content} maxFontSize={100} minFontSize={10} />
      <button
        className="bg-black"
        onClick={() => {
          if (!window.document.fullscreenElement) {
            window.document.documentElement.requestFullscreen()
          } else if (window.document.exitFullscreen) {
            window.document.exitFullscreen()
          }
        }}
      >
        [ ]
      </button>
    </div>
  )
}

export default HomeView
