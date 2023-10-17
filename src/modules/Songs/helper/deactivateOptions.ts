import { socket } from "socket/mainSocket"
import { deactivateOptions } from "src/common/api/options/options.api"

export const deactivatedOptions = () => {
  deactivateOptions()

  const payload = {
    zoom: false,
    particles: false,
  }
  const jsonString = JSON.stringify(payload)
  socket.emit("effects", jsonString)
}
