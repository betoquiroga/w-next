import { Lyric } from "@interfaces/lyrics.interface"
import LyricsItem from "./LyricsItem"

const LyricsList = ({ data }: LyricsListProps) => {
  return (
    <div className="songs border-t-2 border-t-ww-alt">
      {data?.map((i) => (
        <LyricsItem key={i.id} content={i.verse} />
      ))}
    </div>
  )
}

type LyricsListProps = {
  data: Lyric[]
}

export default LyricsList
