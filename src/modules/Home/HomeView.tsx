"use client"

import { useContext, useEffect, useState } from "react"
import { socket } from "../../../socket/mainSocket"
import { StyleContext } from "src/common/context/StyleContext"
import { Style } from "src/common/interfaces/style.interface"
import DynamicFontSize from "./DynamicText"
import Image from "next/image"
import classNames from "classnames"
import { EffectsContext } from "@context/EffectsContext"
import { Effect } from "@interfaces/effect.interface"

const HomeView = () => {
  const { style } = useContext(StyleContext)
  const { effects } = useContext(EffectsContext)
  const [content, setContent] = useState<string>("")
  const [styleData, setStyleData] = useState<Style>(style)
  const [bibleVerse, setBibleVerse] = useState<string>("")
  const [effectsWs, setEffectsWs] = useState<Effect>({
    zoom: false,
    particles: false,
  })

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
    socket.on("effects", (data: string) => {
      setEffectsWs(JSON.parse(data))
    })
  }, [])

  return (
    <div
      className={classNames("prueba bg-cover relative", {
        "pt-24": bibleVerse,
      })}
    >
      {effectsWs.particles && <div className="snow"></div>}
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
            alt={styleData.title}
            height={1080}
            width={1920}
            blurDataURL={styleData.image}
            placeholder="blur"
            className={`${effects.zoom ? "zoom" : ""}`}
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
