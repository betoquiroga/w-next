import { Tab } from "@headlessui/react"
import { clearEmit, styleEmit } from "@helpers/socket/emit"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { WW_API_DOMAIN, WW_PROTOCOL } from "src/common/constants/domains"
import { WW_GALLERY_FOLDER } from "src/common/constants/images"
import { defaultStyle } from "src/common/constants/style"

const ImagesPanel = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios
      .get(`${WW_PROTOCOL}://${WW_API_DOMAIN}/uploads/gallery/small`)
      .then((r) => {
        setImages(r.data)
      })
  }, [])

  const sendData = (image: string) => {
    clearEmit()
    styleEmit(defaultStyle(image, WW_GALLERY_FOLDER))
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
      axios
        .delete(`${WW_PROTOCOL}://${WW_API_DOMAIN}/uploads/gallery/${image}`)
        .then((r) => {
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
                  src={`${WW_PROTOCOL}://${WW_API_DOMAIN}/uploads/gallery/small/${i}`}
                  alt={i}
                  onClick={() => {
                    sendData(i)
                  }}
                  placeholder="blur"
                  blurDataURL="/images/blur/cruz4.jpg"
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
