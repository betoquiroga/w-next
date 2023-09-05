import React, { ChangeEvent } from "react"

interface StylesSearchInputProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const StylesSearchInput: React.FC<StylesSearchInputProps> = ({
  handleSearch,
}) => {
  return (
    <input
      className="input mb-4"
      type="text"
      placeholder="Ingrese texto para filtrar"
      onChange={handleSearch}
    />
  )
}

export default StylesSearchInput
