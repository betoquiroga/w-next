import { vwFontSizeCalculator } from "@helpers/fontSize.helper"
import { useEffect, useRef } from "react"

const BibleContent = ({ text }: BibleContentProps) => {
  const elementRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (element)
      element.style.fontSize = vwFontSizeCalculator(text, 3, 200, 320, 1.5)
  }, [text])

  return (
    <p ref={elementRef} className="font-bold text-white">
      {text}
    </p>
  )
}

export default BibleContent

type BibleContentProps = {
  text: string
}
