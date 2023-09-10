import { Lyric } from "@interfaces/lyrics.interface"
import { createLyric, deleteLyricById } from "src/common/api/songs/lyrics.api"

export const handleFormSubmit = async (
  paramsId: number,
  songValue: string,
  lyrics: Lyric[] | undefined,
  setSong: (song: string) => void,
  setLoading: (loading: boolean) => void,
  setLyrics: (lyrics: Lyric[] | undefined) => void
) => {
  setLoading(true)
  const verses = songValue.split("\n\n")

  try {
    if (lyrics && lyrics.length > 0) {
      await deleteLyricById(paramsId)
    }

    await Promise.all(
      verses.map((v, i) => {
        const newLyricData = {
          song: paramsId,
          order: i + 1,
          verse: v,
          active: false,
        }
        return createLyric(newLyricData)
      })
    )

    setSong("")
    alert("Letras creadas")
  } catch (error) {
    console.error("Error al crear letras:", error)
  } finally {
    setLoading(false)
  }
}
