import { Style } from "@interfaces/style.interface"
import { WW_API_DOMAIN } from "./domains"
import { WW_STYLES_FOLDER } from "./images"

export const defaultStyle = (image: string, folder: string): Style => ({
  id: 0,
  title: "Logo ESP",
  type: "Imagen JPEG",
  details: "Manrope Black / 24px",
  image: buildImageURL(image, folder),
})

export const buildImageURL = (
  image: string,
  folder: string,
  type = "big"
): string => {
  return `http://${WW_API_DOMAIN}/uploads/${folder}/${type}/${image}`
}

export const currentImageUrl = (image: string): string => {
  return image.includes("http")
    ? image
    : buildImageURL(image, WW_STYLES_FOLDER, "small")
}
