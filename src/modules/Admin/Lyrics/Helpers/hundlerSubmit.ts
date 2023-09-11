import { Lyric } from "@interfaces/lyrics.interface"
import { useRouter } from "next/router"
import { createLyric, deleteLyricById } from "src/common/api/songs/lyrics.api"

export const handleFormSubmit = async (
  paramsId: number,
  songValue: string,
  lyrics: Lyric[] | undefined,
  setSong: (song: string) => void,
  setLoading: (loading: boolean) => void
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
    alert("Letra editada")
  } catch (error) {
    console.error("Error al editar letra:", error)
  } finally {
    setLoading(false)
  }
}
