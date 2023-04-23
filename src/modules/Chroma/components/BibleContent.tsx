import { vwFontSizeCalculator } from "@helpers/fontSize.helper"
import { Emit } from "@interfaces/emit.interface"
import { useEffect, useRef, useState } from "react"
import { socket } from "socket/mainSocket"

const BibleContent = ({ text }: BibleContentProps) => {
  const elementRef = useRef<HTMLParagraphElement>(null)
  const [bibleVerse, setBibleVerse] = useState<Emit>({ content: "" } as Emit)

  useEffect(() => {
    socket.on("verse", (verse: string) => {
      if (verse) setBibleVerse(JSON.parse(verse))
    })
    const element = elementRef.current
    if (element)
      element.style.fontSize = vwFontSizeCalculator(text, 3, 200, 320, 1.5)
  }, [text])

  return (
    <p ref={elementRef} className="font-bold text-white">
      {text} <span className="pl-4">{bibleVerse.content}</span>
    </p>
  )
}

export default BibleContent

type BibleContentProps = {
  text: string
}
