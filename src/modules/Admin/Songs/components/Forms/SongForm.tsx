import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getSongById } from "src/common/api/songs/songs.api"
import { handleSubmit } from "../Helpers/handlers"
import { getStyleById, getStyles } from "src/common/api/styles/styles.api"
import { Style } from "@interfaces/style.interface"
import SongInfoForm from "./SongInfoForm"
import SongButtonForm from "./SongButtonForm"
import Dropdown from "./StyleDropdown"

const SongForm = () => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [active, setActive] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null)
  const [styles, setStyles] = useState<Style[]>([])
  const [dropdownOpen, toggleDropdown] = useState(false)
  const nextRouter = useRouter()

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
        const idStyle = data.idStyle || undefined

        if (idStyle !== undefined) {
          getStyleById(idStyle).then((styleData) => {
            setSelectedStyle(styleData as Style)
          })
        }
      })
    }

    getStyles().then((stylesData) => {
      setStyles(stylesData)
    })
  }, [idSong])

  const handleStyleSelect = (style: Style | null) => {
    setSelectedStyle(style)
    toggleDropdown(false)
  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    const selectedStyleId = selectedStyle ? selectedStyle.id : null
    e.preventDefault()
    handleSubmit(
      title,
      author,
      active,
      isEditing,
      idSong,
      selectedStyleId,
      setLoading,
      setTitle,
      setAuthor,
      setSelectedStyle
    )
    if (isEditing && !loading) {
      nextRouter.push("/admin/songs")
    }
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid gap-6 grid-cols-2">
        <SongInfoForm
          title={title}
          author={author}
          setTitle={setTitle}
          setAuthor={setAuthor}
        />
        <Dropdown
          selectedStyle={selectedStyle}
          styles={styles}
          handleStyleSelect={handleStyleSelect}
          dropdownOpen={dropdownOpen}
          toggleDropdown={() => toggleDropdown(!dropdownOpen)}
        />
        <SongButtonForm loading={loading} />
      </div>
    </form>
  )
}

export default SongForm
