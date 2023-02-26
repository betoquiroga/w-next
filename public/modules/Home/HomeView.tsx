"use client"

import { useContext, useEffect, useState } from "react"
import { socket } from "../../../socket/mainSocket"
import ReactHtmlParser from "react-html-parser"
import { StyleContext } from "@context/StyleContext"
import { Style } from "@interfaces/style.interface"

const HomeView = () => {
  const { style } = useContext(StyleContext)
  const [content, setContent] = useState<string>("")
  const [styleData, setStyleData] = useState<Style>(style)

  useEffect(() => {
    socket.on("lyric", (message: string) => {
      setContent(message)
    })
    socket.on("style", (data: string) => {
      setStyleData(JSON.parse(data))
    })
  }, [])

  return (
    <div className="prueba bg-cover">
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

      <p className="font-bold text-white">{ReactHtmlParser(content)}</p>
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
