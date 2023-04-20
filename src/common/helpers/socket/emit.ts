import { Emit } from "@interfaces/emit.interface"
import { Style } from "@interfaces/style.interface"
import { socket } from "socket/mainSocket"

export const lyricEmit = (content: string) => {
  const emitObject: Emit = {
    type: "song",
    content,
  }

  socket.emit("lyric", JSON.stringify(emitObject))
  socket.emit("verse", "")
}

export const coverEmit = (content: string) => {
  const emitObject: Emit = {
    type: "cover",
    content,
  }

  socket.emit("lyric", JSON.stringify(emitObject))
  socket.emit("verse", "")
}

export const bibleEmit = (content: string) => {
  const emitObject: Emit = {
    type: "bible",
    content,
  }

  socket.emit("lyric", JSON.stringify(emitObject))
}

export const verseEmit = (content: string) => {
  const emitObject: Emit = {
    type: "verse",
    content,
  }

  socket.emit("verse", JSON.stringify(emitObject))
}

export const styleEmit = (content: Style) => {
  const emitObject: Emit = {
    type: "style",
    content,
  }

  socket.emit("style", JSON.stringify(emitObject))
}

export const clearEmit = () => {
  socket.emit("lyric", "")
  socket.emit("verse", "")
}
