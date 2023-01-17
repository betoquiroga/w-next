"use client"

import { SetStateAction, useEffect, useState } from "react"
import { socket } from "../../../socket/mainSocket"
import ReactHtmlParser from "react-html-parser"


const HomeView = () => {
  const [content, setContent] = useState<string>("... nothing ...")

  useEffect(() => {
    socket.on("message", (message: SetStateAction<string>) => {
      setContent(message)
    })
  }, [])

  return (
    <div className="prueba">
      <p className="font-bold text-white">
        {ReactHtmlParser(content)}
      </p>
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
