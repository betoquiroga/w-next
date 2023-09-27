import { Style } from "./style.interface"

export interface SongBase {
  title: string
  author: string
  active: boolean
  style?: Style | null
}

export interface Song extends SongBase {
  id: number
}
