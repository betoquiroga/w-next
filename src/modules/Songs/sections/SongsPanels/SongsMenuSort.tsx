import { useEffect, useState } from "react"

const SongsMenuSort = ({ handleOptionClick }: SongsMenuSortProps) => {
  const [order, setOrder] = useState(() => {
    const storedOrder = localStorage.getItem("song-order")
    return storedOrder ? storedOrder : "previous"
  })

  const handleClick = (clickedOrder: string, option: number) => {
    handleOptionClick(option)
    setOrder(clickedOrder)
    localStorage.setItem("song-order", clickedOrder)
  }

  useEffect(() => {
    const storedOrder = localStorage.getItem("song-order")
    if (storedOrder) {
      setOrder(storedOrder)
    }
  }, [])

  return (
    <div className="relative">
      <div className="absolute right-0 !important mt-4 bg-ww-scroll rounded shadow-lg w-40">
        <div
          className={`sort-song ${
            order === "previous" ? "bg-ww-green-700" : ""
          }`}
          onClick={() => handleClick("previous", 4)}
        >
          Anteriores
        </div>
        <div
          className={`sort-song ${order === "recent" ? "bg-ww-green-700" : ""}`}
          onClick={() => handleClick("recent", 3)}
        >
          Recientes
        </div>
        <div
          className={`sort-song ${order === "title" ? "bg-ww-green-700" : ""}`}
          onClick={() => handleClick("title", 2)}
        >
          Título
        </div>
        <div
          className={`sort-song ${order === "author" ? "bg-ww-green-700" : ""}`}
          onClick={() => handleClick("author", 1)}
        >
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
