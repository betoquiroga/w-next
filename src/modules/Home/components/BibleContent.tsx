import { vwFontSizeCalculator } from "@helpers/fontSize.helper"
import { Emit } from "@interfaces/emit.interface"
import { useEffect, useRef } from "react"

const BibleContent = ({ data }: BibleContentProps) => {
  const elementRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (element)
      element.style.fontSize = vwFontSizeCalculator(
        data.content,
        7.3,
        100,
        320,
        3.5
      )
  }, [data])

  return (
    <p ref={elementRef} className="font-bold text-white p-16 bible-text">
      {data.content}
    </p>
  )
}

export default BibleContent

type BibleContentProps = {
  data: Emit
}
