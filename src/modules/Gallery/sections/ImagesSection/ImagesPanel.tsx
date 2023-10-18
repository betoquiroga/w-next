import { Spinner } from "@components/Spinner"
import { Tab } from "@headlessui/react"
import { clearEmit, styleEmit } from "@helpers/socket/emit"
import { deactivateSongs } from "@modules/Songs/helper/deactivateSong"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { deleteFile, getFiles } from "src/common/api/gallery/gallery.api"
import { updateScreen } from "src/common/api/screen/screen.api"
import { WW_API_DOMAIN, WW_PROTOCOL } from "src/common/constants/domains"
import { WW_GALLERY_FOLDER } from "src/common/constants/images"
import { WW_DEFAULT_SCREEN_ID } from "src/common/constants/screen"
import { defaultStyle } from "src/common/constants/style"

const ImagesPanel = () => {
  const { data, isLoading, refetch } = useQuery<string[], Error>(
    ["ALL_IMAGES"],
    () => getFiles("gallery", "small")
  )

  const sendData = (image: string) => {
    clearEmit("gallery")
    styleEmit(defaultStyle(image, WW_GALLERY_FOLDER), "gallery")
    updateScreen(WW_DEFAULT_SCREEN_ID, {
      type: "gallery",
      content: " ",
      verse: " ",
    })
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
      deleteFile("gallery", image)
        .then(() => {
          refetch()
        })
        .catch((error) => {
          alert("error al eliminar la iamgen" + error)
        })
    }
  }

  const handleClick = () => {
    deactivateSongs()
  }

  if (isLoading) {
    return (
      <Tab.Panel>
        Cargando...
        <Spinner />
      </Tab.Panel>
    )
  }

  return (
    <Tab.Panel>
      <h1>Galería de imágenes</h1>
      <div className="grid gap-4 lg:gap-8 grid-cols-2 lg:grid-cols-5 py-4">
        {data?.map((i) => {
          if (isImage(i)) {
            return (
              <div
                key={i}
                className="p-2 hover-bg-ww-scroll cursor-pointer transition-all relative"
              >
                <Image
                  width={250}
                  height={100}
                  src={`${WW_PROTOCOL}://${WW_API_DOMAIN}/uploads/gallery/small/${i}?${Math.random()}`}
                  alt={i}
                  onClick={() => {
                    sendData(i)
                    handleClick()
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
