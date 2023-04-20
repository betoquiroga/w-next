"use client"
import SongsView from "@modules/Songs/SongsView"
import { StyleProvider } from "src/common/context/StyleContext"
import { SongProvider } from "src/common/context/SongContext"
import { SongsProvider } from "src/common/context/SongsContext"
import { ChapterProvider } from "src/common/context/ChapterContext"
import { ActiveLyricProvider } from "src/common/context/ActiveLyricContext"

export default function Songs() {
  return (
    <ChapterProvider>
      <SongsProvider>
        <SongProvider>
          <ActiveLyricProvider>
            <StyleProvider>
              <SongsView />
            </StyleProvider>
          </ActiveLyricProvider>
        </SongProvider>
      </SongsProvider>
    </ChapterProvider>
  )
}
