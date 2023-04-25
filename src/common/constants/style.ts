import { Style } from "@interfaces/style.interface"

export const defaultStyle = (image: string): Style => ({
  id: 0,
  title: "Logo ESP",
  type: "Imagen JPEG",
  details: "Manrope Black / 24px",
  image,
})
