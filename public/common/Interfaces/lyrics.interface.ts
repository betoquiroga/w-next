import { Song } from "./song.interface"

export interface Lyric {
  id: number
  songId: number
  lyrics: Array<LyricContent>
  song: Song
}

export interface LyricContent {
  order: number
  content: Array<string>
}
