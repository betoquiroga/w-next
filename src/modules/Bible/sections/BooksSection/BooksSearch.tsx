import { ChangeEventHandler } from "react"

const BooksSearch = ({
  onSearch,
}: {
  onSearch: ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <div className="books-search mb-4">
      <input
        onChange={(e) => onSearch(e)}
        type="text"
        placeholder="Buscar"
        className="input"
      />
    </div>
  )
}

export default BooksSearch
