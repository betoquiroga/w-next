import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import { Emit } from "@interfaces/emit.interface"

const SongContent = ({ data }: SongContentProps) => {
  const [show, setShow] = useState(true)
  const [localData, setLocalData] = useState(data)

  useEffect(() => {
    if (localData.content !== data.content) {
      setShow(false) // Ocultar el contenido actual

      setTimeout(() => {
        setLocalData(data) // Actualizar el contenido local
      }, 300)

      setTimeout(() => {
        setShow(true) // Mostrar el nuevo contenido
      }, 600) // Asegúrate de darle tiempo suficiente para que la animación de salida se complete antes de comenzar la animación de entrada
    }
  }, [data, localData])

  return (
    <CSSTransition in={show} timeout={300} classNames="fade">
      <p className="font-bold text-white portrait:p-4 landscape:p-16">
        {localData.content.split("\n").map((line, i) => (
          <span className="flex song-content" key={`${line[0]}-${i}`}>
            {line}
          </span>
        ))}
      </p>
    </CSSTransition>
  )
}

export default SongContent

type SongContentProps = {
  data: Emit
}
