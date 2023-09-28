import HomeView from "@modules/Home/HomeView"
import { useEffect, useRef, useState } from "react"

const PreviewCurrent = () => {
  const [scale, setScale] = useState<number | null>()
  const preview = useRef<HTMLParagraphElement>(null)

  const minScale = 0.16
  useEffect(() => {
    if (preview.current) {
      let calculatedScale = minScale
      if (window.innerWidth >= 768) {
        calculatedScale = preview.current.clientWidth / 1920
      }
      setScale(calculatedScale)
    }
  }, [preview])

  return (
    <div ref={preview} className="current mb-4 pt-4">
      {scale && <HomeView width={scale} />}
    </div>
  )
}

export default PreviewCurrent
