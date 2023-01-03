"use client"

import { SetStateAction, useEffect, useState } from "react"
import { socket } from "../socket/mainSocket"
import ReactHtmlParser from "react-html-parser"


const Presenter = () => {
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    socket.on("message", (message: SetStateAction<string>) => {
      setContent(message)
    })
  }, [])

  return (
    <div>
      <span className="text-3xl font-bold text-white">
        {ReactHtmlParser(content)}
      </span>
      <button
        className="text-gray-500"
        onClick={() => {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
          } else if (document.exitFullscreen) {
            document.exitFullscreen()
          }
        }}
      >
        [ ]
      </button>
    </div>
  )
}

export default Presenter
