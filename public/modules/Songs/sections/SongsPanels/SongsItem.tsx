import { SongContext } from "@context/SongContext"
import { Song } from "@interfaces/song.interface"
import SongsService from "@services/songs/songs.service"
import classNames from "classnames"
import { useContext } from "react"

const SongsItem = ({ song }: SongsItemProps) => {
  const songService = new SongsService()
  const { songId, setSongId, setSong } = useContext(SongContext)

  const handleClick = async () => {
    setSongId(id)
    setSong(song)
    await songService.setActive(id)
  }

  const { id, title, author } = song
  return (
    <div
      onClick={handleClick}
      className={classNames(
        "song border-t-2 border-t-ww-alt p-4 hover:bg-ww-alt cursor-pointer",
        { "bg-ww-green-800 hover:bg-ww-green-800": id === songId }
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
