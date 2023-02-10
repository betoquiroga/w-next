import { Lyric } from "@interfaces/lyrics.interface"
import LyricsCover from "./LyricsCover"
import LyricsItem from "./LyricsItem"

const LyricsList = ({ data }: LyricsListProps) => {
  return (
    <div className="songs border-t-2 border-t-ww-alt">
      <LyricsCover song={data?.song} />
      {data?.lyrics.map((i) => (
        <LyricsItem key={i.order} content={i.content} />
      ))}
    </div>
  )
}

type LyricsListProps = {
  data: Lyric
}

export default LyricsList
