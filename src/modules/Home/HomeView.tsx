"use client"

import { useContext, useEffect, useState } from "react"
import { socket } from "../../../socket/mainSocket"
import { StyleContext } from "src/common/context/StyleContext"
import { Style } from "src/common/interfaces/style.interface"
import DynamicFontSize from "./components/DynamicFontSize"
import classNames from "classnames"
import { Effect } from "@interfaces/effect.interface"
import { Emit } from "@interfaces/emit.interface"
import Wallpaper from "./components/Wallpaper"
import FullScreenButton from "./components/FullScreenButton"
import BibleVerse from "./components/BibleVerse"

const HomeView = () => {
  const { style } = useContext(StyleContext)
  const [content, setContent] = useState<Emit>({ content: "" } as Emit)
  const [styleData, setStyleData] = useState<Style>(style)
  const [bibleVerse, setBibleVerse] = useState<Emit>({ content: "" } as Emit)
  const [effectsWs, setEffectsWs] = useState<Effect>({
    zoom: false,
    particles: false,
  })

  useEffect(() => {
    socket.on("lyric", (message: string) => {
      setContent(JSON.parse(message))
    })
    socket.on("style", (data: string) => {
      setStyleData(JSON.parse(data))
    })
    socket.on("verse", (verse: string) => {
      if (verse) setBibleVerse(JSON.parse(verse))
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
      {bibleVerse && <BibleVerse verse={bibleVerse} />}
      <Wallpaper style={styleData} effects={effectsWs} />
      <DynamicFontSize data={content} />
      <FullScreenButton />
    </div>
  )
}

export default HomeView
