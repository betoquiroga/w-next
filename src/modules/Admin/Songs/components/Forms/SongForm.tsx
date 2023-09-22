import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getSongById } from "src/common/api/songs/songs.api"
import { handleSubmit } from "../Helpers/handlers"
import { getStyles } from "src/common/api/styles/styles.api"
import { Style } from "@interfaces/style.interface"
import { WW_STYLES_FOLDER, buildImageURL } from "src/common/constants/style"

const SongForm = () => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [active, setActive] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null)
  const [styles, setStyles] = useState<Style[]>([])

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
        setSelectedStyle(data.style || null)
      })
    }
    getStyles().then((stylesData) => {
      setStyles(stylesData)
    })
  }, [idSong])

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const selectedStyleId = selectedStyle ? selectedStyle.id : null
    console.log(selectedStyleId)
    handleSubmit(
      title,
      author,
      active,
      isEditing,
      idSong,
      selectedStyleId,
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
          placeholder="Título de la canción"
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
        <select
          className="input mb-4"
          value={selectedStyle ? selectedStyle.id.toString() : ""}
          onChange={(e) =>
            setSelectedStyle(
              styles.find((style) => style.id === Number(e.target.value)) ||
                null
            )
          }
          required
        >
          <option value="">Seleccione un estilo</option>
          {styles.map((style) => (
            <option key={style.id} value={style.id}>
              {style.title}
            </option>
          ))}
        </select>
        <div className="mb-4">
          <p> Vista Previa del Estilo:</p>
          {selectedStyle ? (
            <img
              className="max-w-[20rem]"
              src={buildImageURL(
                selectedStyle.image,
                WW_STYLES_FOLDER,
                "small"
              )}
              alt="Imagen previa"
            />
          ) : (
            <p>Sin estilo definido</p>
          )}
        </div>
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
