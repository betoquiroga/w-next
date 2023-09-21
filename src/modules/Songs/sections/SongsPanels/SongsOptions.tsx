import { Song } from "@interfaces/song.interface"
import { useEffect, useState } from "react"
import BibleIcon from "src/common/icons/misc/bible"
import ConfigIcon from "src/common/icons/misc/config"
import PhotoIcon from "src/common/icons/misc/photo"
import ProfileIcon from "src/common/icons/misc/profile"
import SongIcon from "src/common/icons/misc/song"
import SongsMenuSort from "./SongsMenuSort"

const SongsOptions = ({ data, setSongs }: SongOptionsProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isReversed, setIsReversed] = useState(false)
  const [originalData, setOriginalData] = useState<Song[]>([])

  useEffect(() => {
    setOriginalData(data)
  }, [originalData])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleOptionClick = (option: string) => {
    let sortedData: Song[] = []
    if (option === "Opción 3") {
      sortedData = isReversed ? [...originalData] : [...originalData].reverse()
      setIsReversed(isReversed)
    } else if (option === "Opción 4") {
      sortedData = isReversed ? [...originalData].reverse() : [...originalData]
      setIsReversed(isReversed)
    } else {
      sortedData = [...originalData].sort((a, b) =>
        option === "Opción 1"
          ? a.author.localeCompare(b.author)
          : a.title.localeCompare(b.title)
      )
      setIsReversed(false)
    }
    setSongs(sortedData)
    setIsMenuOpen(false)
  }
  return (
    <div className="pb-4 flex justify-between w-full">
      <div className="grid-cols-5 grid gap-4 self-center">
        <SongIcon />
        <BibleIcon />
        <PhotoIcon />
        <ConfigIcon />
        <ProfileIcon />
      </div>
      <div className="relative">
        <span
          className="cursor-pointer hover:bg-ww-alt py-4 px-2"
          onClick={toggleMenu}
        >
          Ordenar por
        </span>
        <SongsMenuSort
          isMenuOpen={isMenuOpen}
          handleOptionClick={handleOptionClick}
        />
      </div>
    </div>
  )
}

type SongOptionsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>
}

export default SongsOptions
