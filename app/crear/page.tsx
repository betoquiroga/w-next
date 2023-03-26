"use client"
import { useState } from "react"
import axios from "axios"

export default function Page() {
  const [song, setSong] = useState("")
  const [songID, setSongID] = useState(0)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const verses = song.split("\n\n")
    verses.map((v, i) => {
      const hi = {
        song: songID,
        order: i + 1,
        verse: v,
        active: false,
      }
      axios
        .post("http://50.116.34.230:3040/lyrics", hi, {
          headers: {
            Authorization: localStorage.getItem("tokenWW"),
          },
        })
        .then((resp) => {
          target.reset()
          console.log(resp)
          setTimeout(() => {
            alert("Letras creadas")
          }, 2000)
        })
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-ww-main"
        type="number"
        name="songid"
        id="songid"
        onChange={(e) => setSongID(Number(e.target.value))}
      />
      <textarea
        className="text-ww-main"
        name="song"
        id="song"
        cols={30}
        rows={40}
        onChange={(e) => setSong(e.target.value)}
      />
      <input
        className="p-2 bg-ww-green-700"
        type="submit"
        value="ENVIAR"
        required
      />
    </form>
  )
}
