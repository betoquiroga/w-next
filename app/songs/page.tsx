"use client"
import SongsView from "@modules/Songs/SongsView"
import { LyricsIdProvider } from "../../public/common/context/LyricsIdContext"

export default function Songs() {
  return (
    <LyricsIdProvider>
      <SongsView />
    </LyricsIdProvider>
  )
}
