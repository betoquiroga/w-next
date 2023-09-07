import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getSongById } from "src/common/api/songs/songs.api"
import { handleSubmit } from "../Helpers/handlers"

const SongForm = () => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  const router = useParams()
  const { id } = router
  const idSong = typeof id === "string" ? parseInt(id, 10) : null

  useEffect(() => {
    if (idSong !== null) {
      getSongById(idSong).then((data) => {
        setTitle(data.title || "")
        setAuthor(data.author || "")
        setIsEditing(true)
      })
    }
  }, [idSong])

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(
      title,
      author,
      isEditing,
      idSong,
      setLoading,
      setTitle,
      setAuthor
    )
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid gap-6 grid-cols-2">
        <input
          className="input mb-4"
          type="text"
          placeholder=" Titulo de la canción"
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
            loading ? "bg-ww-green-900" : "bg-ww-green-800"
          }`}
          type="submit"
          value={loading ? "Cargando" : "Enviar"}
          disabled={loading}
        />
      </div>
    </form>
  )
}

export default SongForm
