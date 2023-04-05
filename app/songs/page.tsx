"use client"
import SongsView from "@modules/Songs/SongsView"
import { StyleProvider } from "src/common/context/StyleContext"
import { SongProvider } from "src/common/context/SongContext"
import { SongsProvider } from "src/common/context/SongsContext"
import { ChapterProvider } from "src/common/context/ChapterContext"

export default function Songs() {
  return (
    <ChapterProvider>
      <SongsProvider>
        <SongProvider>
          <StyleProvider>
            <SongsView />
          </StyleProvider>
        </SongProvider>
      </SongsProvider>
    </ChapterProvider>
  )
}
