import { io } from "socket.io-client"

export const socket = io("http://192.168.100.12:4001", {
  transports: ["websocket", "polling"],
})
