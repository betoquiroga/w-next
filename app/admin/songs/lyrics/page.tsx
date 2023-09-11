"use client"
import { useState } from "react"
import axios from "axios"
import { WW_API_DOMAIN } from "src/common/constants/domains"

export default function Page() {
  const [song, setSong] = useState("")
  const [songID, setSongID] = useState(0)
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const verses = song.split("\n\n")
    setTimeout(() => {
      alert("Letras creadas")
      setLoading(false)
    }, 2000)
    verses.map((v, i) => {
      const hi = {
        song: songID,
        order: i + 1,
        verse: v,
        active: false,
      }
      axios
        .post(`http://${WW_API_DOMAIN}/lyrics`, hi, {
          headers: {
            Authorization: localStorage.getItem("tokenWW"),
          },
        })
        .then((resp) => {
          target.reset()
          console.log(resp)
        })
    })
  }

  return (
    <div className="max-w-[64rem] mx-auto pt-8">
      <h1 className="mb-4 text-3xl">Agregar letra</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="mb-4" htmlFor="songId">
              ID de la canción:
            </label>
            <input
              className="text-ww-main text-xl input text-ww-normal"
              type="number"
              name="songid"
              id="songid"
              onChange={(e) => setSongID(Number(e.target.value))}
              required
            />
          </div>
          <div>
            <label className="mb-4" htmlFor="song">
              Letra
            </label>
            <textarea
              className="input text-ww-normal"
              name="song"
              id="song"
              rows={25}
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
