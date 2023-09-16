import { Tab } from "@headlessui/react"
import { clearEmit, styleEmit } from "@helpers/socket/emit"
import axios from "axios"
import { useEffect, useState } from "react"
import { WW_API_DOMAIN } from "src/common/constants/domains"
import { WW_GALLERY_FOLDER } from "src/common/constants/images"
import { defaultStyle } from "src/common/constants/style"

const VideosPanel = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get(`https://${WW_API_DOMAIN}/uploads/gallery/small`).then((r) => {
      console.log(r)
      setImages(r.data)
    })
  }, [])

  const sendData = (image: string) => {
    clearEmit()
    styleEmit(defaultStyle(image, WW_GALLERY_FOLDER))
  }

  const isVideo = (filename: string): boolean => {
    const extension = filename.split(".").pop()?.toLowerCase()
    if (
      extension === "mp4" ||
      extension === "mpeg" ||
      extension === "mkv" ||
      extension === "mov"
    ) {
      return true
    }
    return false
  }

  return (
    <Tab.Panel>
      <h1>Galería de imágenes</h1>
      <div className="grid gap-8 grid-cols-5 py-4">
        {images.map((i) => {
          if (isVideo(i)) {
            return (
              <div key={i}>
                <img
                  src={`https://${WW_API_DOMAIN}/uploads/${i}`}
                  alt={i}
                  onClick={() => {
                    sendData(i)
                  }}
                />
              </div>
            )
          }
        })}
      </div>
    </Tab.Panel>
  )
}

export default VideosPanel
