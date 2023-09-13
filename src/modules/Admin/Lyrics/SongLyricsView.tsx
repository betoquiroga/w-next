import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { handleFormSubmit } from "./Helpers/hundlerSubmit"
import useFetchLyrics from "@hooks/useFetchLyrics"
import SongLyricsForm from "./SongLyricsForm"
export default function SongLyricsView() {
  const [loading, setLoading] = useState(false)
  const router = useParams()
  const nextRouter = useRouter()
  const { id } = router
  const idSong = Number(id)

  const { lyrics } = useFetchLyrics(idSong)
  const [song, setSong] = useState("")
  useEffect(() => {
    const allVerses = lyrics.map((lyric) => lyric.verse).join("\n\n")
    setSong(allVerses)
  }, [lyrics])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleFormSubmit(Number(idSong), song, lyrics, setLoading)
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
