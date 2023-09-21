const SongsMenuSort = ({ handleOptionClick }: SongsMenuSortProps) => {
  return (
    <div className="relative">
      <div className="absolute right-0 !important mt-4 bg-ww-scroll rounded shadow-lg w-40">
        <div className="sort-song" onClick={() => handleOptionClick(3)}>
          Recientes
        </div>
        <div className="sort-song" onClick={() => handleOptionClick(4)}>
          Anteriores
        </div>
        <div className="sort-song" onClick={() => handleOptionClick(2)}>
          Título
        </div>
        <div className="sort-song" onClick={() => handleOptionClick(1)}>
          Autor
        </div>
      </div>
    </div>
  )
}

export default SongsMenuSort

type SongsMenuSortProps = {
  handleOptionClick: (option: number) => void
}
