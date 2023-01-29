import { Song } from "@interfaces/song.interface"
import SongsItem from "./SongsItem"

const SongList = ({ data }: SongListProps) => {
  return (
    <div className="songs">
      {data.map((i) => (
        <SongsItem key={i.id} id={i.id} title={i.title} author={i.author} />
      ))}
    </div>
  )
}

type SongListProps = {
  data: Array<Song>
}

export default SongList
