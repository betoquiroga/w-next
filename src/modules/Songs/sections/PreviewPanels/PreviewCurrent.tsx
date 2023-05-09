import HomeView from "@modules/Home/HomeView"
import { useEffect, useRef, useState } from "react"

const PreviewCurrent = () => {
  const [scale, setScale] = useState<number | null>()
  const preview = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (preview.current) {
      setScale(preview.current?.clientWidth / 1920)
    }
  }, [preview])

  return (
    <div ref={preview} className="current mb-4 pt-4">
      {scale && <HomeView width={scale} />}
    </div>
  )
}

export default PreviewCurrent
