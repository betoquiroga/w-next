"use client"
import SongsView from "@modules/Songs/SongsView"
import { SongProvider } from "@context/SongContext"
import { SongsProvider } from "@context/SongsContext"

export default function Songs() {
  return (
    <SongsProvider>
      <SongProvider>
        <SongsView />
      </SongProvider>
    </SongsProvider>
  )
}
