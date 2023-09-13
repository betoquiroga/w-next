import { getLyrics } from "src/common/api/songs/lyrics.api"
import { Lyric } from "@interfaces/lyrics.interface"
import { useEffect, useState } from "react"

const useFetchLyrics = (idSong: number): useFetchLyricsObject => {
  const [lyrics, setLyrics] = useState<Lyric[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lyricResponse = await getLyrics(idSong)
        const sortedLyrics = lyricResponse.sort(
          (a: Lyric, b: Lyric) => a.order - b.order
        )
        setLyrics(sortedLyrics)
      } catch {
        setLyrics([])
      }
    }
    fetchData()
  }, [idSong])

  return { lyrics }
}

type useFetchLyricsObject = {
  lyrics: Lyric[]
}

export default useFetchLyrics
