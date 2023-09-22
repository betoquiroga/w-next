export interface ScreenBase {
  type: "bible" | "black" | "cover" | "gallery" | "song"
  content: string
  active: boolean
  background: string
  verse: string
}

export interface Screen extends ScreenBase {
  id: number
}
