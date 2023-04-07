import { useEffect, useRef } from "react"
import ReactHtmlParser from "react-html-parser"

function DynamicFontSize({ text }: DynamicTextProps) {
  const elementRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (element) {
      const fontSize = 7.3 - text.length / 100
      element.style.fontSize = `${fontSize}vw`
    }

    if (element && text.length > 320) element.style.fontSize = "3.5vw"
    if (element && text.includes("span class="))
      element.style.fontSize = "7.5vw"
  }, [text])

  return (
    <p ref={elementRef} className="font-bold text-white p-16">
      {ReactHtmlParser(text)}
    </p>
  )
}

export default DynamicFontSize

type DynamicTextProps = {
  text: string
}
