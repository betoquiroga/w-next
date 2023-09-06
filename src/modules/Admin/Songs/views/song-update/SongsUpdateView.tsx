import SongsService from "@services/songs/songs.service"
import { Song } from "src/common/interfaces/song.interface"
import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { WW_API_DOMAIN } from "src/common/constants/domains"

const SongsUpdateView = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const songs = new SongsService()

  const [songData, setSongData] = useState({
    songId: 0,
    title: "",
    author: "",
    active: false,
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSongData({
      ...songData,
      [name]: value,
    })
  }

  const handleUpdate = async () => {
    try {
      setLoading(true)
      const response = await songs.updateSong(songData.songId, {
        title: songData.title,
        author: songData.author,
        active: songData.active,
      })

      console.log("Canción actualizada con éxito:", response)
    } catch (error) {
      console.error("Error al actualizar la canción:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const songId = 1
  }, [])
  return (
    <div className="p-4 pl-[5rem] bg-ww-content pb-16">
      <div className="max-w-[80rem] m-auto">
        <div className="mb-4 pt-8">
          <h1 className="text-3xl">Actualizar canción</h1>
        </div>
        <form>
          <div className="grid gap-6 grid-cols-2">
            <input
              className="input mb-4"
              type="text"
              placeholder="Título de la canción"
              name="title"
              value={songData.title}
              onChange={handleInputChange}
            />
            <input
              className="input mb-4"
              type="text"
              placeholder="Autor de la canción"
              name="author"
              value={songData.author}
              onChange={handleInputChange}
            />
            <input
              className="col-span-2 transition-all py-2 px-4 rounded-lg bg-ww-green-800"
              type="submit"
              value={loading ? "Actualizando" : "Actualizar"}
              disabled={loading}
              onClick={handleUpdate}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SongsUpdateView
