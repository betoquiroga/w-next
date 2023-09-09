"use client"
import { Lyric } from "@interfaces/lyrics.interface"
import { useState, useEffect } from "react"
import {
  createLyric,
  deleteLyricById,
  getLyrics,
} from "src/common/api/songs/lyrics.api"

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const verses = song.split("\n\n")

    try {
      if (lyrics && lyrics.length > 0) {
        await deleteLyricById(Number(params.id))
      }
      await Promise.all(
        verses.map((v, i) => {
          const newLyricData = {
            song: Number(params.id),
            order: i + 1,
            verse: v,
            active: false,
          }
          return createLyric(newLyricData)
        })
      )
      target.reset()
      alert("Letras creadas")
    } catch (error) {
      console.error("Error al crear letras:", error)
    } finally {
      setLoading(false)
    }
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
