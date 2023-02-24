import { socket } from "socket/mainSocket"
import ActionButton from "./ActionsPanel/ActionButton"

const ActionsSection = () => {
  const cleanScreen = () => {
    socket.emit("lyric", "")
  }

  return (
    <div className="bg-ww-content rounded col-span-2 p-4">
      <div className="py-4">
        <ActionButton text="Pasar a negro" />
        <ActionButton text="Enviar logotipo" />
        <ActionButton onClick={cleanScreen} text="Limpiar pantalla" />
        <ActionButton text="Modo descanso" />
      </div>
    </div>
  )
}

export default ActionsSection
