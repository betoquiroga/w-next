import { useEffect, useState } from "react"
import { Song } from "@interfaces/song.interface"
import { orderSongs } from "@modules/Songs/helper/orderSongs"

const useSongsOptions = (
  data: any,
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>
) => {
  const [originalData, setOriginalData] = useState<Song[]>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setOriginalData(data)
  }, [originalData])

  const handleOptionClick = (option: string) => {
    setIsMenuOpen(false)
    setSongs(orderSongs(option, originalData))
  }

  return { originalData, isMenuOpen, toggleMenu, handleOptionClick }
}

export default useSongsOptions
