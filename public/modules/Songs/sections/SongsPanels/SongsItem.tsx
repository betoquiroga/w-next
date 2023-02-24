import { SongContext } from "@context/SongsContext"
import SongsService from "@services/songs/songs.service"
import classNames from "classnames"
import { useContext } from "react"

const SongsItem = ({ id, title, author }: SongsItemProps) => {
  const songService = new SongsService()
  const { songId, setSongId } = useContext(SongContext)

  const handleClick = async () => {
    setSongId(id)
    await songService.setActive(id)
  }

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
  id: number
  title: string
  author: string
}

export default SongsItem
