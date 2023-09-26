import { SongBase } from "@interfaces/song.interface"
import { Style } from "@interfaces/style.interface"
import { createSongs, updateSong } from "src/common/api/songs/songs.api"

export const handleSubmit = async (
  title: string,
  author: string,
  active: boolean,
  isEditing: boolean,
  idSong: number | null,
  style: Style | number | null,
  setLoading: (loading: boolean) => void,
  setTitle: (title: string) => void,
  setAuthor: (author: string) => void,
  setSelectedStyle: (style: Style | null) => void
) => {
  setLoading(true)
  const idStyle = typeof style === "number" ? style : style?.id
  const songData = {
    title,
    author,
    active,
    style: idStyle !== undefined ? { id: idStyle } : null,
  }
  const createData = {
    title,
    author,
    active,
    style: idStyle,
  }
  try {
    if (isEditing && idSong !== null) {
      await updateSong(idSong, songData as SongBase)
    } else {
      await createSongs(createData as SongBase)
    }
    setTitle("")
    setAuthor("")
    setSelectedStyle(null)
    alert(isEditing ? "Canción actualizada" : "Canción creada")
  } catch (error) {
    alert("Hubo un error al guardar la canción")
  } finally {
    setLoading(false)
  }
}
