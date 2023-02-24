"use client"
import SongsView from "@modules/Songs/SongsView"
import { SongProvider } from "@context/SongsContext"

export default function Songs() {
  return (
    <SongProvider>
      <SongsView />
    </SongProvider>
  )
}
