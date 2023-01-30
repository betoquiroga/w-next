import { Lyric } from "@interfaces/lyrics.interface"
import LyricsItem from "./LyricsItem"

const LyricsList = ({ data }: LyricsListProps) => {
  return (
    <div className="songs border-t-2 border-t-ww-alt">
      {data?.lyrics.map((i) => (
        <LyricsItem key={i.order} content={i.content} />
      ))}
    </div>
  )
}

type LyricsListProps = {
  data: Lyric | undefined
}

export default LyricsList
