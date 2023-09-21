import { Emit } from "@interfaces/emit.interface"
import { Style } from "@interfaces/style.interface"
import path from "path"
import { socket } from "socket/mainSocket"
import { updateScreen } from "src/common/api/screen/screen.api"
import { setActive } from "src/common/api/songs/lyrics.api"

export const lyricEmit = (content: string) => {
  clearEmit("song")
  const emitObject: Emit = {
    type: "song",
    content,
  }
  updateScreen(1, {
    content: emitObject.content,
    verse: " ",
  })
  socket.emit("lyric", JSON.stringify(emitObject))
  socket.emit("verse", "")
}

export const coverEmit = (content: string) => {
  const emitObject: Emit = {
    type: "cover",
    content,
  }
  updateScreen(1, {
    type: emitObject.type,
    content: emitObject.content,
    verse: " ",
  })
  socket.emit("lyric", JSON.stringify(emitObject))
  socket.emit("verse", "")
}

export const bibleEmit = (content: string) => {
  const emitObject: Emit = {
    type: "bible",
    content,
  }
  updateScreen(1, {
    type: emitObject.type,
    content: emitObject.content,
  })
  socket.emit("lyric", JSON.stringify(emitObject))
}

export const verseEmit = (content: string) => {
  const emitObject: Emit = {
    type: "bible",
    content,
  }
  updateScreen(1, {
    verse: emitObject.content,
  })
  socket.emit("verse", JSON.stringify(emitObject))
}

export const styleEmit = (content: Style) => {
  const image = path.basename(content.image)
  updateScreen(1, {
    background: image,
  })
  socket.emit("style", JSON.stringify(content))
}

export const clearEmit = (
  type: "bible" | "black" | "cover" | "gallery" | "song"
) => {
  setActive(0)
  const dataLyric = { type, content: " " }
  const dataVerse = { content: " " }
  updateScreen(1, {
    type: dataLyric.type,
    content: dataLyric.content,
    verse: dataVerse.content,
  })
  socket.emit("lyric", JSON.stringify(dataLyric))
  socket.emit("verse", JSON.stringify(dataVerse))
}

export const blackEmit = (
  type: "bible" | "black" | "cover" | "gallery" | "song"
) => {
  const dataLyric = { type, content: " " }
  const dataVerse = { content: " " }
  updateScreen(1, {
    type: dataLyric.type,
    verse: dataVerse.content,
  })
  socket.emit("lyric", JSON.stringify(dataLyric))
  socket.emit("verse", JSON.stringify(dataVerse))
}
