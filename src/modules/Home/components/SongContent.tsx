import { Emit } from "@interfaces/emit.interface"

const SongContent = ({ data }: SongContentProps) => {
  return (
    <>
      <p className="font-bold text-white p-16">
        {data.content.split("\n").map((line, i) => (
          <span className="flex song-content" key={`${line[0]}-${i}`}>
            {line}
          </span>
        ))}
      </p>
    </>
  )
}

export default SongContent

type SongContentProps = {
  data: Emit
}
