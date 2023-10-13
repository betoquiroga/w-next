import { Style } from "@interfaces/style.interface"
import { WW_API_DOMAIN, WW_PROTOCOL } from "./domains"
import { WW_STYLES_FOLDER } from "./images"

export const defaultStyle = (image: string, folder: string): Style => ({
  id: 0,
  title: "Default Image Style",
  type: "Imagen JPEG",
  details: "Manrope Black / 24px",
  active: true,
  image: buildImageURL(image, folder),
})

export const defaultVideoStyle = (videoURL: string): Style => ({
  id: 0,
  title: "Default Video Style",
  type: "Video",
  details: "Video Details",
  active: true,
  image: videoURL,
})

export const buildImageURL = (
  image: string,
  folder: string,
  type = "big"
): string => {
  return `${WW_PROTOCOL}://${WW_API_DOMAIN}/uploads/${folder}/${type}/${image}`
}

export const currentImageUrl = (image: string): string => {
  return image?.includes("http")
    ? image
    : buildImageURL(image, WW_STYLES_FOLDER, "small")
}

export { WW_STYLES_FOLDER }
