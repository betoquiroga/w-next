import { useState, useEffect } from "react"
import { Emit } from "@interfaces/emit.interface"

const SongContent = ({ data }: SongContentProps) => {
  const [animationClass, setAnimationClass] = useState<string>("fade-in")
  const [displayedData, setDisplayedData] = useState<Emit>(data)

  useEffect(() => {
    if (displayedData.content !== data.content) {
      setAnimationClass("fade-out")

      setTimeout(() => {
        setDisplayedData(data) // Cambiamos al nuevo contenido
        setAnimationClass("fade-in")
      }, 500)
    }
  }, [data, displayedData])

  return (
    <p
      className={`font-bold text-white portrait:p-4 landscape:p-16 ${animationClass}`}
    >
      {displayedData.content.split("\n").map((line, i) => (
        <span className="flex song-content" key={`${line[0]}-${i}`}>
          {line}
        </span>
      ))}
    </p>
  )
}

export default SongContent

type SongContentProps = {
  data: Emit
}
