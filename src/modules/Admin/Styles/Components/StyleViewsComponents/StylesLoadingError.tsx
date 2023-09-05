import React from "react"

interface StylesLoadingErrorProps {
  isLoading: boolean
  isError: boolean
}

const StylesLoadingError: React.FC<StylesLoadingErrorProps> = ({
  isLoading,
  isError,
}) => {
  if (isLoading) {
    return <p>Cargando...</p>
  } else if (isError) {
    return <p>Error</p>
  } else {
    return <p>No hay estilos disponibles.</p>
  }
}

export default StylesLoadingError
