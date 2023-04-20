import { Style } from "./style.interface"

export interface Emit {
  type: "bible" | "song" | "verse" | "style" | "cover" | "empty"
  content: string | Style
}
