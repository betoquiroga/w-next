import React, { SyntheticEvent } from "react"
import { Style } from "@interfaces/style.interface"
import { buildImageURL, WW_STYLES_FOLDER } from "src/common/constants/style"
import StylesDeleteButton from "@modules/Admin/Styles/Components/StylesDeleteButton"
import Link from "next/link"
const StylesTable = ({ styles, handleError }: StylesTableProps) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Imagen</th>
          <th>Título</th>
          <th>Detalles</th>
          <th>Tipo de archivo</th>
          <th>Editar estilo</th>
          <th>Eliminar estilo</th>
        </tr>
      </thead>
      <tbody>
        {styles &&
          styles.map((style) => (
            <tr key={style.id}>
              <td>{style.id}</td>
              <td>
                <img
                  className="max-w-[5rem]"
                  src={buildImageURL(style.image, WW_STYLES_FOLDER, "small")}
                  alt={`${style.id}-${style.title}`}
                  onError={(e) => handleError(e, style.type)}
                />
              </td>
              <td>{style.title}</td>
              <td>{style.details}</td>
              <td>{style.type}</td>
              <td>
                <Link
                  className="text-ww-green-600"
                  href={`/admin/styles/create?id=${style.id}&title=${style.title}&details=${style.details}&edit=true`}
                >
                  Editar
                </Link>
              </td>
              <td>
                <StylesDeleteButton id={style.id} />
              </td>
            </tr>
          ))}
        {styles?.length === 0 && (
          <tr>
            <td colSpan={6}> No hay estilos</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
interface StylesTableProps {
  styles: Style[]
  handleError: (
    e: SyntheticEvent<HTMLImageElement, Event>,
    type: string
  ) => void
}
export default StylesTable
