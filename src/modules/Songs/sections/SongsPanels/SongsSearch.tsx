import { ChangeEventHandler } from "react"

const SongsSearch = ({
  onSearch,
}: {
  onSearch: ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <div className="songs-search mb-4">
      <input
        onChange={(e) => onSearch(e)}
        type="text"
        placeholder="Buscar"
        className="input"
      />
      <span>Búsqueda avanzada</span>
    </div>
  )
}

export default SongsSearch
