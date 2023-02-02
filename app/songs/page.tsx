"use client"
import SongsView from "@modules/Songs/SongsView"
import { LyricsProvider } from "@context/LyricsContext"

export default function Songs() {
  return (
    <LyricsProvider>
      <SongsView />
    </LyricsProvider>
  )
}
