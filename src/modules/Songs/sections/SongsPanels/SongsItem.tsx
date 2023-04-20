import { SongContext } from "src/common/context/SongContext"
import { Song } from "src/common/interfaces/song.interface"
import SongsService from "src/common/services/songs/songs.service"
import classNames from "classnames"
import { useContext } from "react"
import { SongsContext } from "@context/SongsContext"

const SongsItem = ({ song }: SongsItemProps) => {
  const songService = new SongsService()
  const { setSong, setSongId } = useContext(SongContext)
  const { activeSongId, setActiveSongId } = useContext(SongsContext)

  const handleClick = async () => {
    setSongId(id)
    setActiveSongId(id)
    setSong(song)
    await songService.setActive(id)
  }

  const { id, title, author } = song
  return (
    <div
      onClick={handleClick}
      className={classNames(
        "song border-t-2 border-t-ww-alt p-4 hover:bg-ww-alt cursor-pointer",
        { "bg-ww-green-800 hover:bg-ww-green-800": id === activeSongId }
      )}
    >
      <p className="text-ww-normal">{title}</p>
      <span className="text-ww-lighter">{author}</span>
    </div>
  )
}

type SongsItemProps = {
  song: Song
}

export default SongsItem
