import { Tab } from "@headlessui/react"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { socket } from "socket/mainSocket"
import { WW_API_DOMAIN } from "src/common/constants/domains"

const ImagesPanel = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get(`http://${WW_API_DOMAIN}/uploads`).then((r) => {
      setImages(r.data)
    })
  }, [])

  const sendData = (image: string) => {
    socket.emit("lyric", "")
    socket.emit("verse", "")
    const defaultData = {
      id: 0,
      title: "Contexto espacial",
      type: "Imagen JPEG",
      details: "Manrope Black / 24px",
      image: `http://${WW_API_DOMAIN}/uploads/big/${image}`,
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

  const deleteImage = (image: string) => {
    if (confirm("Se eliminará esta imagen para siempre")) {
      axios.delete(`http://${WW_API_DOMAIN}/uploads/${image}`).then((r) => {
        console.log(r)
        setImages(images.filter((i) => i !== image))
      })
    }
  }

  return (
    <Tab.Panel>
      <h1>Galería de imágenes</h1>
      <div className="grid gap-8 grid-cols-5 py-4">
        {images.map((i) => {
          if (isImage(i)) {
            return (
              <div
                key={i}
                className="p-2 hover:bg-ww-scroll cursor-pointer transition-all relative"
              >
                <Image
                  width={250}
                  height={100}
                  src={`http://${WW_API_DOMAIN}/uploads/small/${i}`}
                  alt={i}
                  onClick={() => {
                    sendData(i)
                  }}
                  placeholder="blur"
                  blurDataURL={`http://${WW_API_DOMAIN}/uploads/blur/${i}`}
                />
                <button
                  className="bg-ww-scroll flex justify-center align-middle rounded-full text-ww-normal text-center w-6 h-6 absolute top-0 right-0 hover:bg-red-600"
                  onClick={() => deleteImage(i)}
                >
                  x
                </button>
              </div>
            )
          }
        })}
      </div>
    </Tab.Panel>
  )
}

export default ImagesPanel
