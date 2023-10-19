import { StyleContext } from "src/common/context/StyleContext"
import { SyntheticEvent, useContext } from "react"
import { styleEmit } from "@helpers/socket/emit"
import { currentImageUrl, defaultStyle } from "src/common/constants/style"
import { WW_STYLES_FOLDER } from "src/common/constants/images"
import { setActiveStyle } from "src/common/api/styles/styles.api"
import { WW_DEFAULT_SCREEN_ID } from "src/common/constants/screen"
import { updateScreen } from "src/common/api/screen/screen.api"

const StyleItem = ({
  id,
  title,
  type,
  details,
  active,
  image,
}: StyleItemProps) => {
  const { setStyle } = useContext(StyleContext)

  const changeStyle = async () => {
    const data = { id, title, type, details, active, image }
    styleEmit(defaultStyle(image, WW_STYLES_FOLDER))
    updateScreen(WW_DEFAULT_SCREEN_ID, {
      typeStyle: "style",
    })
    await setActiveStyle(id)
    setStyle({ ...data, image: currentImageUrl(image) })
  }

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = type?.includes("Video")
      ? "/images/styles/video.jpeg"
      : "/images/styles/error.jpeg"
  }

  return (
    <div className="song border-b-2 border-b-ww-alt last:border-none py-4 flex align-top">
      {image && (
        <img
          onClick={changeStyle}
          src={currentImageUrl(image)}
          alt={title}
          className="w-[7rem] mr-6 aspect-video hover:opacity-80 hover:cursor-pointer"
          onError={handleError}
        />
      )}
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
  active: boolean
  image: string
}

export default StyleItem
