import { LyricsContext } from "@context/LyricsContext"
import { useContext } from "react"

const SongsItem = ({ id, title, author }: SongsItemProps) => {
  const { setLyricsId } = useContext(LyricsContext)

  return (
    <div
      onClick={() => setLyricsId(id)}
      className="song border-t-2 border-t-ww-alt p-4 hover:bg-ww-alt cursor-pointer"
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
