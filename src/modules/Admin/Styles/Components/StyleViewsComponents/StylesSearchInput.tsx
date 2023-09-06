import React, { ChangeEvent } from "react"

const StylesSearchInput = ({ handleSearch }: StylesSearchInputProps) => {
  return (
    <input
      className="input mb-4"
      type="text"
      placeholder="Ingrese texto para filtrar"
      onChange={handleSearch}
    />
  )
}

interface StylesSearchInputProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export default StylesSearchInput
