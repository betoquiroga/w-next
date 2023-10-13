import { activeLyricEmit, activeSongEmit } from "@helpers/socket/emit"
import { desactivateAllLyrics } from "src/common/api/songs/lyrics.api"
import { desactivateAllSongs } from "src/common/api/songs/songs.api"

export const deactivateSongs = () => {
  desactivateAllSongs()
  activeSongEmit("0")
  desactivateAllLyrics()
  activeLyricEmit("0")
}
