import { useState, useEffect } from "react"
import { Lyric } from "@interfaces/lyrics.interface"
import { useParams, useRouter } from "next/navigation"
import { handleFormSubmit } from "./Helpers/hundlerSubmit"
import { fetchLyrics } from "./FetchLyrics"
import SongLyricsForm from "./SongLyricsForm"
export default function SongLyricsView() {
  const [song, setSong] = useState("")
  const [loading, setLoading] = useState(false)
  const [lyrics, setLyrics] = useState<Lyric[] | undefined>([])
  const router = useParams()
  const nextRouter = useRouter()
  const { id } = router
  const idSong = Number(id)
  useEffect(() => {
    async function fetchData() {
      const lyricsData = await fetchLyrics(idSong)
      setLyrics(lyricsData)
      if (lyricsData.length > 0) {
        const allVerses = lyricsData.map((lyric) => lyric.verse).join("\n\n")
        setSong(allVerses)
      }
    }
    fetchData()
  }, [idSong])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleFormSubmit(Number(idSong), song, lyrics, setSong, setLoading)
    if (!loading) {
      nextRouter.push(`/admin/songs/${idSong}`)
    }
  }

  return (
    <div className="max-w-[64rem] mx-auto pt-8">
      <h1 className="mb-4 text-3xl">Editar letra a la canción {idSong}</h1>
      <div>
        <SongLyricsForm
          song={song}
          loading={loading}
          handleSubmit={handleSubmit}
          setSong={setSong}
        />
      </div>
    </div>
  )
}
