import { SongContext } from "src/common/context/SongContext"
import { Lyric } from "src/common/interfaces/lyrics.interface"
import { useContext } from "react"
import LyricsItem from "./LyricsItem"
import LyricsCover from "./LyricsCover"

const LyricsList = ({ data }: LyricsListProps) => {
  const { song } = useContext(SongContext)
  return (
    <div className="songs border-t-2 border-t-ww-alt">
      {song?.title && song?.author && (
        <LyricsCover content={`${song.title}\n${song.author}`} id={-1} />
      )}
      {data
        ?.sort((a: Lyric, b: Lyric) => a.order - b.order)
        .map((i: Lyric) => (
          <LyricsItem key={i.id} content={i.verse} id={i.id} />
        ))}
    </div>
  )
}

type LyricsListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

export default LyricsList
