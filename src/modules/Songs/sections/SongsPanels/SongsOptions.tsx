import { Song } from "@interfaces/song.interface"
import BibleIcon from "src/common/icons/misc/bible"
import ConfigIcon from "src/common/icons/misc/config"
import PhotoIcon from "src/common/icons/misc/photo"
import ProfileIcon from "src/common/icons/misc/profile"
import SongIcon from "src/common/icons/misc/song"
import SongsMenuSort from "./SongsMenuSort"
import useSongsOptions from "@hooks/useSongsOptions"

const SongsOptions = ({ data, setSongs }: SongOptionsProps) => {
  const { isMenuOpen, toggleMenu, handleOptionClick } = useSongsOptions(
    data,
    setSongs
  )
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
          className="cursor-pointer hover:text-ww-green-200 py-4 px-2"
          onClick={toggleMenu}
        >
          Ordenar por
        </span>
        {isMenuOpen && <SongsMenuSort handleOptionClick={handleOptionClick} />}
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
