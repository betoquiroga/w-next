import { Emit } from "@interfaces/emit.interface"
import { useEffect, useRef, useState } from "react"

const SongContent = ({ data }: SongContentProps) => {
  const elementRef = useRef<HTMLParagraphElement>(null)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    const [titleData, authorData] = data.content.split("\n")
    setTitle(titleData)
    setAuthor(authorData)
  }, [data])

  return (
    <p ref={elementRef} className="font-bold text-white p-16">
      <span className="flex song-content">{title}</span>
      <span className="flex song-author">{author}</span>
    </p>
  )
}

export default SongContent

type SongContentProps = {
  data: Emit
}
