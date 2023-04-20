import { Emit } from "@interfaces/emit.interface"
import { useEffect, useRef } from "react"
import ReactHtmlParser from "react-html-parser"

function DynamicFontSize({ data }: DynamicTextProps) {
  const elementRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (element) {
      const fontSize = 7.3 - data.content.length / 100
      element.style.fontSize = `${fontSize}vw`
    }

    if (element && data.content.length > 320) element.style.fontSize = "3.5vw"
    if (element && data.type === "song") element.style.fontSize = "7.5vw"
  }, [data])

  return (
    <p ref={elementRef} className="font-bold text-white p-16">
      {ReactHtmlParser(data.content)}
    </p>
  )
}

export default DynamicFontSize

type DynamicTextProps = {
  data: Emit
}
