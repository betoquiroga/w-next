import HomeView from "@modules/Home/HomeView"
import { useEffect, useRef, useState } from "react"

const PreviewCurrent = () => {
  const [scale, setScale] = useState<number | null>()
  const [maxHeight, setMaxHeight] = useState<number | null>(230)

  const preview = useRef<HTMLParagraphElement>(null)

  const minScale = 0.18
  useEffect(() => {
    if (preview.current) {
      let calculatedScale = minScale
      if (window.innerWidth >= 768) {
        calculatedScale = preview.current.clientWidth / 1920
      }
      setScale(calculatedScale)

      const dynamicMaxHeight = calculatedScale * 1920
      setMaxHeight(dynamicMaxHeight)
    }
  }, [preview])

  return (
    <div
      ref={preview}
      className="current pt-4"
      style={{ maxHeight: maxHeight ? `${maxHeight - 64}px` : "230px" }}
    >
      {scale && <HomeView width={scale} />}
    </div>
  )
}

export default PreviewCurrent
