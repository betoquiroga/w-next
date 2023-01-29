export interface Lyric {
  id: number
  songId: number
  lyrics: Array<LyricContent>
}

export interface LyricContent {
  order: number
  content: Array<string>
}
