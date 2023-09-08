import React from "react"

const StylesLoadingError = ({
  isLoading,
  isError,
}: StylesLoadingErrorProps) => {
  if (isLoading) {
    return <p>Cargando...</p>
  }
  if (isError) {
    return <p>Error</p>
  }
  return <></>
}

interface StylesLoadingErrorProps {
  isLoading: boolean
  isError: boolean
}

export default StylesLoadingError
