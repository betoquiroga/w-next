"use client"

import { useContext, useEffect, useState } from "react"
import { socket } from "../../../socket/mainSocket"
import ReactHtmlParser from "react-html-parser"
import { StyleContext } from "@context/StyleContext"

const HomeView = () => {
  const { style } = useContext(StyleContext)
  const [content, setContent] = useState<string>("")
  const [styleData, setStyleData] = useState<string>(style.image)

  useEffect(() => {
    socket.on("lyric", (message: string) => {
      setContent(message)
    })
    socket.on("style", (data: string) => {
      setStyleData(JSON.parse(data).image)
    })
  }, [])

  return (
    <div
      className="prueba bg-cover"
      style={{ backgroundImage: `url('${styleData}')` }}
    >
      <p className="font-bold text-white">{ReactHtmlParser(content)}</p>
      <button
        className="bg-black"
        onClick={() => {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
          } else if (document.exitFullscreen) {
            document.exitFullscreen()
          }
        }}
      >
        [ Full ]
      </button>
    </div>
  )
}

export default HomeView
