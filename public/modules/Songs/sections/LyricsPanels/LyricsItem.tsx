import { socket } from "socket/mainSocket"

const LyricsItem = ({ content }: LyricsItemProps) => {
  const addMessage = (e: React.SyntheticEvent) => {
    socket.emit("lyric", e.currentTarget.innerHTML)
  }

  return (
    <div className="song hover:bg-ww-alt cursor-pointer">
      <p className="text-ww-normal p-4" onClick={addMessage}>
        {content.split("\n").map((line) => (
          <span key={line} className="flex">
            {line}
          </span>
        ))}
      </p>
    </div>
  )
}

type LyricsItemProps = {
  content: string
}

export default LyricsItem
