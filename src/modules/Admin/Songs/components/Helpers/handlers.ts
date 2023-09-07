import { createSongs, updateSong } from "src/common/api/songs/songs.api"

export const handleSubmit = async (
  title: string,
  author: string,
  isEditing: boolean,
  idSong: number | null,
  setLoading: (loading: boolean) => void,
  setTitle: (title: string) => void,
  setAuthor: (author: string) => void
) => {
  setLoading(true)

  const songData = {
    title,
    author,
    active: false,
  }

  try {
    if (isEditing && idSong !== null) {
      await updateSong(idSong, songData)
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
