const SongsSearch = () => {
  return (
    <div className="songs-search mb-4">
      <input
        type="text"
        placeholder="Buscar "
        className="mb-3 w-full p-3 focus:outline-none focus-visible:outline-none bg-ww-alt rounded-lg"
      />
      <span>Búsqueda avanzada</span>
    </div>
  )
}

export default SongsSearch
