import ActionButton from "./ActionsPanel/ActionButton"
import { useEffect } from "react"
import { defaultStyle } from "src/common/constants/style"
import { clearEmit, styleEmit } from "@helpers/socket/emit"

const ActionsSection = () => {
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "F3") handleAction("black.jpg")
      if (event.key === "F4") handleAction("logo.jpg")
      if (event.key === "F5") cleanScreen()
      if (event.key === "F6") handleAction("arte-tv-052322.jpg")
    })
  }, [])

  const cleanScreen = () => clearEmit()

  const handleAction = (image: string) => {
    cleanScreen()
    styleEmit(defaultStyle(image))
  }

  return (
    <div className="bg-ww-content rounded col-span-2">
      <div className="flex justify-between w-full border-b-2 border-b-ww-alt">
        <span className="py-4">Acciones rapidas</span>
      </div>
      <div className="my-8">
        <ActionButton
          onClick={() => handleAction("/images/styles/black.jpg")}
          text="Pasar a negro - F3"
        />
        <ActionButton
          onClick={() => handleAction("/images/styles/logo.jpg")}
          text="Enviar logotipo - F4"
        />
        <ActionButton onClick={cleanScreen} text="Limpiar pantalla - F5" />
        <ActionButton
          onClick={() => handleAction("/images/styles/arte-tv-052322.jpg")}
          text="Modo prédica - F6"
        />
      </div>
    </div>
  )
}

export default ActionsSection
