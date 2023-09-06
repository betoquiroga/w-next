import { ChangeEvent } from "react"

const SongSearchInput = ({ handleSearch }: SongSearchInputProps) => {
  return (
    <input
      className="input mb-4"
      type="text"
      placeholder="Ingrese texto para filtrar"
      onChange={handleSearch}
    />
  )
}

interface SongSearchInputProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export default SongSearchInput
