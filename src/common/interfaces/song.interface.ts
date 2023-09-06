import { Style } from "./style.interface"

export interface SongCreate {
  title: string
  author: string
  active: boolean
  style?: Style
}

export interface Song extends SongCreate {
  id: number
}
