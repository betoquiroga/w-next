import { Song } from "src/common/interfaces/song.interface"
import SongsItem from "./SongsItem"

const SongList = ({ data }: SongListProps) => {
  return (
    <div className="songs">
      {data?.length > 0 &&
        data.map((i: Song) => <SongsItem key={i.id} song={i} />)}
    </div>
  )
}

type SongListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

export default SongList
