import React, { SyntheticEvent } from "react"
import { Style } from "@interfaces/style.interface"
import { buildImageURL, WW_STYLES_FOLDER } from "src/common/constants/style"
import StylesDeleteView from "@modules/Admin/Styles/Components/StylesDeleteView"

interface StylesTableProps {
  styles: Style[]
  handleError: (
    e: SyntheticEvent<HTMLImageElement, Event>,
    type: string
  ) => void
  handleDeleteSuccess: () => void
}

const StylesTable: React.FC<StylesTableProps> = ({
  styles,
  handleError,
  handleDeleteSuccess,
}) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Imagen</th>
          <th>Título</th>
          <th>Detalles</th>
          <th>Tipo de archivo</th>
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
                <StylesDeleteView
                  id={style.id}
                  onDeleteSuccess={handleDeleteSuccess}
                />
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

export default StylesTable
