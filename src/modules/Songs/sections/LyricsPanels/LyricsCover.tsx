import { Song } from "src/common/interfaces/song.interface"
import { coverEmit } from "@helpers/socket/emit"

const LyricsCover = ({ song }: LyricsCoverProps) => {
  const addMessage = (e: React.SyntheticEvent) => {
    coverEmit(e.currentTarget.innerHTML)
  }

  return (
    <div className="song hover:bg-ww-alt cursor-pointer">
      <p className="text-ww-normal p-4" onClick={addMessage}>
        <span className="flex">
          {song.title}
          <br />
          {song.author}
        </span>
      </p>
    </div>
  )
}

type LyricsCoverProps = {
  song: Song
}

export default LyricsCover
