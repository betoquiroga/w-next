import { Style, StyleBase } from "@interfaces/style.interface"
import { WW_API_DOMAIN } from "./domains"
import { WW_STYLES_FOLDER } from "./images"
import { getStyleActive, setActiveStyle } from "../api/styles/styles.api"

export const defaultStyle = (image: string, folder: string): Style => ({
  id: 0,
  title: "Logo ESP",
  type: "Imagen JPEG",
  details: "Manrope Black / 24px",
  active: true,
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
  return image?.includes("http")
    ? image
    : buildImageURL(image, WW_STYLES_FOLDER, "small")
}

export { WW_STYLES_FOLDER }
