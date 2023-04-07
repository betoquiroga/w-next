"use client"

import { useContext, useEffect, useState } from "react"
import { socket } from "../../../socket/mainSocket"
import { StyleContext } from "src/common/context/StyleContext"
import { Style } from "src/common/interfaces/style.interface"
import DynamicFontSize from "./DynamicText"
import Image from "next/image"
import classNames from "classnames"

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
    <div className={classNames("prueba bg-cover", { "pt-24": bibleVerse })}>
      {bibleVerse && (
        <div className="verse fixed z-50 top-0 text-center w-full pt-6">
          {bibleVerse}
        </div>
      )}
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
          <Image
            src={styleData.image}
            alt={style.title}
            height={1080}
            width={1920}
            blurDataURL={styleData.image}
            placeholder="blur"
          />
        )}
      </div>
      <DynamicFontSize text={content} />
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
