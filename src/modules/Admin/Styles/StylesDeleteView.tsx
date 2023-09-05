import { useMutation } from "@tanstack/react-query"
import { deleteStyle } from "src/common/api/styles/styles.api"

const StylesDeleteView = ({
  id,
  onDeleteSuccess,
}: {
  id: number
  onDeleteSuccess: () => void
}) => {
  const delStyle = useMutation(deleteStyle)

  const deleteStyleById = () => {
    if (window.confirm("Se eliminará el estilo")) {
      delStyle.mutate(id, {
        onError: (error: unknown) => {
          console.error(error)
          alert("Error al eliminar el estilo")
        },
        onSuccess: () => {
          alert("Estilo eliminado siiii")
          onDeleteSuccess()
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

export default StylesDeleteView
