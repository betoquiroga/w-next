import { coverEmit } from "@helpers/socket/emit"
import classNames from "classnames"

const LyricsCover = ({ id, content }: LyricsCoverProps) => {
  const addMessage = (e: React.SyntheticEvent) => {
    coverEmit(e.currentTarget.innerHTML)
  }

  return (
    <div className="song hover:bg-ww-alt cursor-pointer">
      <p className="text-ww-normal p-4" onClick={addMessage}>
        {content.split("\n").map((line, i) => (
          <span
            key={line}
            className={classNames("flex", {
              "song-author": i > 0 && id < 0,
              "song-chroma": id < 0,
            })}
          >
            {line}
          </span>
        ))}
      </p>
    </div>
  )
}

type LyricsCoverProps = {
  id: number
  content: string
}

export default LyricsCover
