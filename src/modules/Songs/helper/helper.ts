import { useEffect, useState } from "react"
import { Song } from "@interfaces/song.interface"

const useSongsOptions = (
  data: any,
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>
) => {
  const [originalData, setOriginalData] = useState<Song[]>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [sortedData, setSortedData] = useState<Song[]>([])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setOriginalData(data)
    // setSortedData(data)
  }, [originalData])

  const handleOptionClick = (option: number) => {
    setIsMenuOpen(false)

    if (option === 3) {
      setSongs([...originalData].reverse())
      return
    }

    if (option === 4) {
      setSongs([...originalData])
      return
    }

    const sortedData: Song[] = [...originalData].sort((a, b) =>
      option === 1
        ? a.author.localeCompare(b.author)
        : a.title.localeCompare(b.title)
    )
    setSongs(sortedData)
  }

  // useEffect(() => {
  //   const storageData = localStorage.getItem("song-order")
  //   if (storageData) {
  //     const parsedData = JSON.parse(storageData)
  //     handleOptionClick(parsedData.option, parsedData.sortedData)
  //   }
  // }, [])
  // const handleOptionClick = (option: number, customSortedData?: Song[]) => {
  //   setIsMenuOpen(false)

  //   const newSortedData = customSortedData || sortData(option)
  //   const storageData = {
  //     option,
  //     sortedData: newSortedData,
  //   }
  //   localStorage.setItem("song-order", JSON.stringify(storageData))

  //   setSortedData(newSortedData)
  //   setSongs(newSortedData)
  // }

  // const sortData = (option: number): Song[] => {
  //   if (option === 4) {
  //     return [...originalData]
  //   }

  //   if (option === 3) {
  //     return [...originalData].reverse()
  //   }

  //   return [...originalData].sort((a, b) =>
  //     option === 2
  //       ? a.title.localeCompare(b.title)
  //       : a.author.localeCompare(b.author)
  //   )
  // }

  return { originalData, isMenuOpen, toggleMenu, handleOptionClick }
}

export default useSongsOptions
