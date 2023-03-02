import { socket } from "socket/mainSocket"
import ActionButton from "./ActionsPanel/ActionButton"
import { useEffect } from "react"

const ActionsSection = () => {
  const cleanScreen = () => {
    socket.emit("lyric", "")
  }

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "F3") {
        sendBlack()
      }
      if (event.key === "F4") {
        sendLogo()
      }
      if (event.key === "F5") {
        cleanScreen()
      }
      if (event.key === "F6") {
        sendMessageMode()
      }
    })
  }, [])

  const sendLogo = () => {
    cleanScreen()
    const data = {
      id: 0,
      title: "Contexto espacial",
      type: "Imagen JPEG",
      details: "Manrope Black / 24px",
      image: "/images/styles/logo.jpg",
    }
    socket.emit("style", JSON.stringify(data))
  }

  const sendMessageMode = () => {
    cleanScreen()
    const data = {
      id: 0,
      title: "Contexto espacial",
      type: "Imagen JPEG",
      details: "Manrope Black / 24px",
      image: "/images/styles/arte-tv.jpg",
    }
    socket.emit("style", JSON.stringify(data))
  }

  const sendBlack = () => {
    cleanScreen()
    const data = {
      id: 0,
      title: "Contexto espacial",
      type: "Imagen JPEG",
      details: "Manrope Black / 24px",
      image: "/images/styles/black.jpg",
    }
    socket.emit("style", JSON.stringify(data))
  }

  return (
    <div className="bg-ww-content rounded col-span-2 p-4">
      <div className="py-4">
        <ActionButton onClick={sendBlack} text="Pasar a negro - F3" />
        <ActionButton onClick={sendLogo} text="Enviar logotipo - F4" />
        <ActionButton onClick={cleanScreen} text="Limpiar pantalla - F5" />
        <ActionButton onClick={sendMessageMode} text="Modo prédica - F6" />
      </div>
    </div>
  )
}

export default ActionsSection
