import { SongContext } from "src/common/context/SongContext"
import { Song } from "src/common/interfaces/song.interface"
import classNames from "classnames"
import { useContext } from "react"
import { SongsContext } from "@context/SongsContext"
import { ColumnContext } from "@context/ColumnContext"
import SongIcon from "@icons/misc/song"

const SongsItem = ({ song }: SongsItemProps) => {
  const { setSong, setSongId } = useContext(SongContext)
  const { activeSongId, selectedSongId, setSelectedSongId } =
    useContext(SongsContext)
  const { setActiveColumn } = useContext(ColumnContext)

  const handleClick = async () => {
    setSongId(id)
    setSelectedSongId(id)
    setSong(song)
    setActiveColumn(2)
  }

  const { id, title, author } = song
  return (
    <div
      onClick={handleClick}
      className={classNames(
        "song border-t-2 border-t-ww-alt p-4 hover:bg-ww-alt cursor-pointer",
        { "bg-ww-green-800 hover:bg-ww-green-800": id === selectedSongId }
      )}
    >
      <p className="text-ww-normal">{title}</p>
      <span className="text-ww-lighter">{author}</span>
      {id === activeSongId && <SongIcon />}
    </div>
  )
}

type SongsItemProps = {
  song: Song
}

export default SongsItem
