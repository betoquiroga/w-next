import { Style } from "./style.interface"

export interface Song {
  id: number
  title: string
  author: string
  active: boolean
  style?: Style
}
