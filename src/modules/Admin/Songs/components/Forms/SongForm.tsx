import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getSongById } from "src/common/api/songs/songs.api"
import { handleSubmit } from "../Helpers/handlers"

const SongForm = () => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [active, setActive] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const router = useParams()
  const { id } = router
  const idSong = Number(id)

  useEffect(() => {
    if (idSong > 0) {
      getSongById(idSong).then((data) => {
        setTitle(data.title || "")
        setAuthor(data.author || "")
        setActive(data.active || false)
        setIsEditing(true)
      })
    }
  }, [idSong])

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(
      title,
      author,
      active,
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
          placeholder=" Título de la canción"
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
          className={`col-span-2 transition-all py-2 px-4 rounded-lg hover:bg-ww-green-700 ${
            loading ? "bg-ww-green-900 text-ww-lighter" : "bg-ww-green-800"
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
