import { io } from "socket.io-client"

const WS_HOST = process.env.NEXT_PUBLIC_WS_HOST

export const socket = io(WS_HOST, {
  transports: ["websocket", "polling"],
})
