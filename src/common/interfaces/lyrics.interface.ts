export interface LyricBase {
  verse: string
  song: number
  order: number
  active: boolean
}

export interface Lyric extends LyricBase {
  id: number
  songId: number
}
