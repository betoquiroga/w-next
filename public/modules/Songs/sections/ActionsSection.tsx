import { socket } from "socket/mainSocket"
import ActionButton from "./ActionsPanel/ActionButton"

const ActionsSection = () => {
  const cleanScreen = () => {
    socket.emit("lyric", "")
  }

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
        <ActionButton onClick={sendBlack} text="Pasar a negro" />
        <ActionButton onClick={sendLogo} text="Enviar logotipo" />
        <ActionButton onClick={cleanScreen} text="Limpiar pantalla" />
        <ActionButton onClick={sendMessageMode} text="Modo prédica" />
      </div>
    </div>
  )
}

export default ActionsSection
