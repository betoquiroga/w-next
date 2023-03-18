import { Tab } from "@headlessui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { socket } from "socket/mainSocket"
import { WW_API_DOMAIN } from "src/common/constants/domains"

const ImagesPanel = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get(`http://${WW_API_DOMAIN}/uploads`).then((r) => {
      console.log(r)
      setImages(r.data)
    })
  }, [])

  const sendData = (image: string) => {
    socket.emit("lyric", "")
    const defaultData = {
      id: 0,
      title: "Contexto espacial",
      type: "Imagen JPEG",
      details: "Manrope Black / 24px",
      image: `http://${WW_API_DOMAIN}/uploads/${image}`,
    }
    socket.emit("style", JSON.stringify(defaultData))
  }

  const isImage = (filename: string): boolean => {
    const extension = filename.split(".").pop()?.toLowerCase()
    if (
      extension === "jpg" ||
      extension === "jpeg" ||
      extension === "png" ||
      extension === "gif"
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
          if (isImage(i)) {
            return (
              <div key={i}>
                <img
                  src={`http://${WW_API_DOMAIN}/uploads/${i}`}
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

export default ImagesPanel
