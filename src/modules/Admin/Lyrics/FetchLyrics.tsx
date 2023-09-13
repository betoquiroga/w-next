import { getLyrics } from "src/common/api/songs/lyrics.api"
import { Lyric } from "@interfaces/lyrics.interface"

export async function fetchLyrics(idSong: number): Promise<Lyric[]> {
  try {
    const lyricResponse = await getLyrics(idSong)
    const sortedLyrics = lyricResponse.sort(
      (a: Lyric, b: Lyric) => a.order - b.order
    )
    return sortedLyrics
  } catch {
    return []
  }
}
