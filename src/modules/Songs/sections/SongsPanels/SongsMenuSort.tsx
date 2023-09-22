import { useEffect, useState } from "react"
import {
  WW_ORDER_AUTHOR,
  WW_ORDER_PREVIOUS,
  WW_ORDER_RECENT,
  WW_ORDER_TITLE,
} from "src/common/constants/order"

const SongsMenuSort = ({ handleOptionClick }: SongsMenuSortProps) => {
  const [order, setOrder] = useState(() => {
    const storedOrder = localStorage.getItem("song-order")
    return storedOrder ? storedOrder : "previous"
  })

  const handleClick = (clickedOrder: string, option: string) => {
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
          onClick={() => handleClick("previous", WW_ORDER_PREVIOUS)}
        >
          Anteriores
        </div>
        <div
          className={`sort-song ${order === "recent" ? "bg-ww-green-700" : ""}`}
          onClick={() => handleClick("recent", WW_ORDER_RECENT)}
        >
          Recientes
        </div>
        <div
          className={`sort-song ${order === "title" ? "bg-ww-green-700" : ""}`}
          onClick={() => handleClick("title", WW_ORDER_TITLE)}
        >
          Título
        </div>
        <div
          className={`sort-song ${order === "author" ? "bg-ww-green-700" : ""}`}
          onClick={() => handleClick("author", WW_ORDER_AUTHOR)}
        >
          Autor
        </div>
      </div>
    </div>
  )
}

export default SongsMenuSort

type SongsMenuSortProps = {
  handleOptionClick: (option: string) => void
}
