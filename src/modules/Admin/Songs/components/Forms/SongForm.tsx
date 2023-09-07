import { useState } from "react"
import { createSongs, updateSong } from "src/common/api/songs/songs.api"

const SongForm = ({ isEditing, initialData }: SongFormProps) => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState(isEditing ? initialData.title : "")
  const [author, setAuthor] = useState(isEditing ? initialData.author : "")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const songData = {
      title,
      author,
      active: false,
    }

    try {
      if (isEditing) {
        await updateSong(initialData.id, songData)
      } else {
        await createSongs(songData)
      }
      setTitle("")
      setAuthor("")
      alert(isEditing ? "Canción actualizada" : "Canción creada")
    } catch (error) {
      alert("Hubo un error al guardar la canción")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 grid-cols-2">
        <input
          className="input mb-4"
          type="text"
          placeholder=" de la canción"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="input mb-4"
          type="text"
          placeholder="Autor de la canción"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          className={`col-span-2 transition-all py-2 px-4 rounded-lg ${
            loading ? "bg-gray-300" : "bg-ww-green-800"
          }`}
          type="submit"
          value={loading ? "Cargando" : "Enviar"}
          disabled={loading}
        />
      </div>
    </form>
  )
}

interface SongFormProps {
  isEditing: boolean
  initialData: {
    id: number
    title: string
    author: string
  }
}

export default SongForm
