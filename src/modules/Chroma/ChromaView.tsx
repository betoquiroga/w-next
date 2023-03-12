"use client"

import { useEffect, useState } from "react"
import { socket } from "../../../socket/mainSocket"
import { parse } from "node-html-parser"

const HomeView = () => {
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    socket.on("lyric", (message: string) => {
      setContent(message)
    })
  }, [])

  const parseContent = (text: string) => {
    const htmlObject = parse(text)
    const etiquetas = htmlObject.getElementsByTagName("span")
    let textoExtraido = ""
    if (etiquetas.length > 0) {
      for (let i = 0; i < etiquetas.length; i++) {
        const etiqueta = etiquetas[i]
        textoExtraido = `${textoExtraido} ${etiqueta.textContent} ` as string
      }
    } else {
      textoExtraido = text
    }

    const palabras = textoExtraido.split(" ")
    const mitad = Math.floor(palabras.length / 2)
    const primeraMitad = palabras.slice(0, mitad)
    const segundaMitad = palabras.slice(mitad)

    return [primeraMitad, segundaMitad]
  }

  return (
    <div className="chroma bg-cover">
      <p className="font-bold text-white">
        {parseContent(content)[0].map((c) => (
          <>{`${c} `}</>
        ))}
        <br />
        {parseContent(content)[1].map((c) => (
          <>{` ${c}`}</>
        ))}
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
