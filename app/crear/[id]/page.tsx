"use client"
import { useState, useEffect } from "react"
import { getLyrics } from "src/common/api/songs/lyrics.api"
import { handleFormSubmit } from "../Helpers/hundlerSubmit"
import { Lyric } from "@interfaces/lyrics.interface"

export default function Page({ params }: CrearProps) {
  const [song, setSong] = useState("")
  const [loading, setLoading] = useState(false)
  const [lyrics, setLyrics] = useState<Lyric[] | undefined>([])

  useEffect(() => {
    async function fetchLyrics() {
      try {
        const lyricResponse = await getLyrics(Number(params.id))
        setLyrics(lyricResponse)
        if (lyricResponse.length > 0) {
          const allVerses = lyricResponse
            .map((lyric) => lyric.verse)
            .join("\n\n")
          setSong(allVerses)
        }
      } catch (error) {
        // la cancion esta vacia aun
      }
    }
    fetchLyrics()
  }, [params.id])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleFormSubmit(Number(params.id), song, lyrics, setSong, setLoading)
  }

  return (
    <div className="max-w-[64rem] mx-auto pt-8">
      <h1 className="mb-4 text-3xl">Agregar letra a la canción {params.id}</h1>
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
type CrearProps = {
  params: {
    id: string
  }
}
