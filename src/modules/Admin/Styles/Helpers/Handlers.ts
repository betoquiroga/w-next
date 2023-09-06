import { SyntheticEvent } from "react"

export const handleError = (
  e: SyntheticEvent<HTMLImageElement, Event>,
  type: string
) => {
  const target = e.target as HTMLImageElement
  target.src = type.includes("Video")
    ? "/images/styles/video.jpeg"
    : "/images/styles/error.jpeg"
}
