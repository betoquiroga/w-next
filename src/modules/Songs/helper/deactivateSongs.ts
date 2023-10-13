import { activeLyricEmit, activeSongEmit } from "@helpers/socket/emit"
import { desactivateAllLyrics } from "src/common/api/songs/lyrics.api"
import { desactivateAllSongs } from "src/common/api/songs/songs.api"

const DeactivateSongs = () => {
  const deactivateSongs = () => {
    desactivateAllSongs()
    activeSongEmit("0")
    desactivateAllLyrics()
    activeLyricEmit("0")
  }

  return deactivateSongs()
}

export default DeactivateSongs
