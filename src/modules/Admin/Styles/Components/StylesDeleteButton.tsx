import { useMutation } from "@tanstack/react-query"
import { deleteStyle } from "src/common/api/styles/styles.api"

const StylesDeleteView = ({ id }: SytlesDeleteButtonProps) => {
  const deleleteStyleMutation = useMutation(deleteStyle)

  const deleteStyleById = () => {
    if (window.confirm("Se eliminará el estilo")) {
      deleleteStyleMutation.mutate(id, {
        onError: (error: unknown) => {
          console.error(error)
          alert("Error al eliminar el estilo")
        },
        onSuccess: () => {
          alert("Estilo eliminado")
          window.location.reload()
        },
      })
    }
  }
  return (
    <button onClick={deleteStyleById} className="text-ww-green-600">
      Eliminar
    </button>
  )
}

interface SytlesDeleteButtonProps {
  id: number
}

export default StylesDeleteView
