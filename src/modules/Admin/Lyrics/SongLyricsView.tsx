import { useState, useEffect } from "react"
import { getLyrics } from "src/common/api/songs/lyrics.api"
import { Lyric } from "@interfaces/lyrics.interface"
import { useParams, useRouter } from "next/navigation"
import { handleFormSubmit } from "./Helpers/hundlerSubmit"
export default function SongLyricsView() {
  const [song, setSong] = useState("")
  const [loading, setLoading] = useState(false)
  const [lyrics, setLyrics] = useState<Lyric[] | undefined>([])
  const router = useParams()
  const nextRouter = useRouter()
  const { id } = router
  const idSong = Number(id)
  useEffect(() => {
    async function fetchLyrics() {
      try {
        const lyricResponse = await getLyrics(idSong)
        const sortedLyrics = lyricResponse.sort(
          (a: Lyric, b: Lyric) => a.order - b.order
        )
        setLyrics(sortedLyrics)
        if (sortedLyrics.length > 0) {
          const allVerses = sortedLyrics
            .map((lyric) => lyric.verse)
            .join("\n\n")
          setSong(allVerses)
        }
      } catch {
        // letra vacia
      }
    }
    fetchLyrics()
  }, [idSong])
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleFormSubmit(Number(idSong), song, lyrics, setSong, setLoading)

    // Check if setLoading is now false
    if (!loading) {
      // Navigate to the desired route
      nextRouter.push(`/admin/songs/${idSong}`)
    }
  }
  return (
    <div className="max-w-[64rem] mx-auto pt-8">
      <h1 className="mb-4 text-3xl">Editar letra a la canción {idSong}</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="mb-4" htmlFor="song">
              Letra
            </label>
            <textarea
              className="input text-ww-normal"
              name="song"
              id="song"
              rows={25}
              value={song}
              onChange={(e) => setSong(e.target.value)}
              required
            />
          </div>
          <div></div>
          <input
            className="p-2 bg-ww-green-700 hover:bg-ww-green-800 input"
            type="submit"
            value={loading ? "Cargando..." : "Enviar"}
            disabled={loading}
          />
        </form>
      </div>
    </div>
  )
}
