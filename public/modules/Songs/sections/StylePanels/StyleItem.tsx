import { StyleContext } from "@context/StyleContext"
import { SyntheticEvent, useContext } from "react"
import { socket } from "socket/mainSocket"

const StyleItem = ({ id, title, type, details, image }: StyleItemProps) => {
  const { setStyle } = useContext(StyleContext)

  const changeStyle = () => {
    const data = { id, title, type, details, image }
    socket.emit("style", JSON.stringify(data))
    setStyle(data)
  }

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = "/images/styles/video.jpeg"
  }

  return (
    <div className="song border-b-2 border-b-ww-alt last:border-none py-4 flex align-top">
      <img
        onClick={changeStyle}
        src={image}
        alt={title}
        className="w-[7rem] mr-6 aspect-video hover:opacity-80 hover:cursor-pointer"
        onError={handleError}
      />
      <div>
        <p className="text-ww-normal">{title}</p>
        <span className="text-ww-lighter flex">{type}</span>
        <span className="text-ww-lighter flex">{details}</span>
      </div>
    </div>
  )
}

type StyleItemProps = {
  id: number
  title: string
  type: string
  details: string
  image: string
}

export default StyleItem
