const LyricsItem = ({ content }: LyricsItemProps) => {
  return (
    <div className="song hover:bg-ww-alt cursor-pointer p-4">
      <p className="text-ww-normal">
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
