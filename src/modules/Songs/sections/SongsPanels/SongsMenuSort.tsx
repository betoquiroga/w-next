const SongsMenuSort = ({
  isMenuOpen,
  handleOptionClick,
}: SongsMenuSortProps) => {
  return (
    isMenuOpen && (
      <div className="relative">
        <div className="absolute right-0 !important mt-4 p-2 bg-ww-content border border-gray-300 rounded shadow-lg w-40">
          <div
            className="cursor-pointer hover:bg-ww-green-700 p-2"
            onClick={() => handleOptionClick("Opción 3")}
          >
            Recientes
          </div>
          <div
            className="cursor-pointer hover:bg-ww-green-700 p-2"
            onClick={() => handleOptionClick("Opción 4")}
          >
            Anteriores
          </div>
          <div
            className="cursor-pointer hover:bg-ww-green-700 p-2"
            onClick={() => handleOptionClick("Opción 2")}
          >
            Título
          </div>
          <div
            className="cursor-pointer hover:bg-ww-green-700 p-2"
            onClick={() => handleOptionClick("Opción 1")}
          >
            Autor
          </div>
        </div>
      </div>
    )
  )
}

export default SongsMenuSort

type SongsMenuSortProps = {
  isMenuOpen: boolean
  handleOptionClick: (option: string) => void
}
