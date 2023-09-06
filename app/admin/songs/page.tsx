"use client"
import SongsView from "@modules/Admin/Songs/views/create-view/SongsView"
import { SongsProvider } from "src/common/context/SongsContext"

export default function Songs() {
  return (
    <SongsProvider>
      <SongsView />
    </SongsProvider>
  )
}
