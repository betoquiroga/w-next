import React from "react"

const StylesLoadingError = ({
  isLoading,
  isError,
}: StylesLoadingErrorProps) => {
  if (isLoading) {
    return <p>Cargando...</p>
  } else if (isError) {
    return <p>Error</p>
  } else {
    return <p>No hay estilos disponibles.</p>
  }
}

interface StylesLoadingErrorProps {
  isLoading: boolean
  isError: boolean
}

export default StylesLoadingError
