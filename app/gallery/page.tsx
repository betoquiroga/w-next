"use client"
import GalleryView from "@modules/Gallery/GalleryView"
import { StyleProvider } from "src/common/context/StyleContext"

export default function Chroma() {
  return (
    <StyleProvider>
      <GalleryView />
    </StyleProvider>
  )
}
