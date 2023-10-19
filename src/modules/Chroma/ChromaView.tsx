"use client"

import { parseContent } from "@helpers/text.helper"
import { Emit } from "@interfaces/emit.interface"
import { useEffect, useState } from "react"
import { socket } from "../../../socket/mainSocket"
import BibleContent from "./components/BibleContent"
import FullScreenButton from "./components/FullScreenButton"
import LyricContent from "./components/LyricContent"

const ChromaView = () => {
  const [primeraMitad, setPrimeraMitad] = useState<string>("")
  const [segundaMitad, setSegundaMitad] = useState<string>("")
  const [contentData, setContentData] = useState<Emit>({} as Emit)

  useEffect(() => {
    socket.on("song", (message: string) => {
      const { content } = JSON.parse(message)

      setPrimeraMitad(parseContent(content).primeraMitad)
      setSegundaMitad(parseContent(content).segundaMitad)
      setContentData(JSON.parse(message))
    })
  }, [])

  return (
    <div className="chroma bg-cover">
      <div className="container">
        {contentData?.type === "style" && (
          <LyricContent
            primeraMitad={primeraMitad}
            segundaMitad={segundaMitad}
          />
        )}
        {contentData?.type === "bible" && (
          <BibleContent text={contentData.content} />
        )}
      </div>
      <FullScreenButton />
    </div>
  )
}

export default ChromaView
