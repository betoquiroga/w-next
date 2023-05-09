import { Emit } from "@interfaces/emit.interface"
import { useEffect, useState } from "react"

const SongContent = ({ data }: SongContentProps) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    const [titleData, authorData] = data.content.split("\n")
    setTitle(titleData)
    setAuthor(authorData)
  }, [data])

  return (
    <p className="font-bold text-white p-16 song-cover">
      <span className="flex song-content">{title}</span>
      <span className="flex song-author">{author}</span>
    </p>
  )
}

export default SongContent

type SongContentProps = {
  data: Emit
}
