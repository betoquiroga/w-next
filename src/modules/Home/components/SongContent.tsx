import { Emit } from "@interfaces/emit.interface"
import useAnimation from "@hooks/useAnimation"

const SongContent = ({ data }: SongContentProps) => {
  const { animationClass, displayedData } = useAnimation(
    "art",
    data.content,
    500
  )

  return (
    <p
      className={`font-bold text-white portrait:p-4 landscape:p-16 ${animationClass}`}
    >
      {displayedData.split("\n").map((line, i) => (
        <span className="flex song-content" key={`${line[0]}-${i}`}>
          {line}
        </span>
      ))}
    </p>
  )
}

export default SongContent

type SongContentProps = {
  data: Emit
}
