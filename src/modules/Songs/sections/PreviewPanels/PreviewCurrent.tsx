import HomeView from "@modules/Home/HomeView"
import { useEffect, useRef, useState } from "react"

const PreviewCurrent = () => {
  const [scale, setScale] = useState<number | null>()
  const preview = useRef<HTMLParagraphElement>(null)

  const minScale = 0.12

  useEffect(() => {
    if (preview.current) {
      const calculatedScale = preview.current?.clientWidth / 1920
      setScale(Math.max(calculatedScale, minScale))
    }
  }, [preview])

  return (
    <div ref={preview} className="current mb-4 pt-4">
      {scale && <HomeView width={scale} />}
    </div>
  )
}

export default PreviewCurrent
