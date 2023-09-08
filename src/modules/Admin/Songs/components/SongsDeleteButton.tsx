import { useMutation } from "@tanstack/react-query"
import { deleteSong } from "src/common/api/songs/songs.api"

const SongsDeleteButton = ({ id }: SongsDeleteButtonProps) => {
  const deleteSongMutation = useMutation(deleteSong)
  const deleteSongById = () => {
    if (window.confirm("Se eliminará la cancion")) {
      deleteSongMutation.mutate(id, {
        onError: (error: unknown) => {
          console.error(error)
          alert("Error al eliminar la cancion")
        },
        onSuccess: () => {
          alert("Canción eliminada siiiiuuu")
          window.location.reload()
        },
      })
    }
  }
  return <button onClick={deleteSongById}>Eliminar</button>
}

interface SongsDeleteButtonProps {
  id: number
}

export default SongsDeleteButton
