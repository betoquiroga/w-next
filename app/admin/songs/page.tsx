"use client"
import SongsView from "@modules/Admin/Songs/SongsView"
import { SongsProvider } from "src/common/context/SongsContext"

export default function Songs() {
  return (
    <SongsProvider>
      <SongsView />
    </SongsProvider>
  )
}
