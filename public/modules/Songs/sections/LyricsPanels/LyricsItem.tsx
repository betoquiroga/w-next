import { socket } from "socket/mainSocket"

const LyricsItem = ({ content }: LyricsItemProps) => {
  const addMessage = (e: React.SyntheticEvent) => {
    socket.emit("message", e.currentTarget.innerHTML)
  }

  return (
    <div className="song hover:bg-ww-alt cursor-pointer">
      <p className="text-ww-normal p-4" onClick={addMessage}>
        {content.map((line) => (
          <span key={line} className="flex">
            {line}
          </span>
        ))}
      </p>
    </div>
  )
}

type LyricsItemProps = {
  content: Array<string>
}

export default LyricsItem
