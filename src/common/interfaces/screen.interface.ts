export interface ScreenBase {
  type: "bible" | "black" | "songCover" | "gallery" | "lyric" | "style"
  typeStyle: "gallery" | "style"
  content: string
  active: boolean
  background: string
  verse: string
}

export interface Screen extends ScreenBase {
  id: number
}
