import { Lyric } from "src/common/interfaces/lyrics.interface"
import { Song } from "src/common/interfaces/song.interface"
import { useQuery } from "@tanstack/react-query"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react"
import { getLyrics } from "../api/songs/lyrics.api"

const SongContext = createContext({} as SongContextProps)

const SongProvider = ({ children }: SongProviderProps) => {
  const [songId, setSongId] = useState(2)
  const [song, setSong] = useState({} as Song)
  const { data, isLoading, isError, refetch } = useQuery<Lyric, Error>(
    [`CURRENT_SONG_LYRICS-${songId}`],
    () => getLyrics(songId)
  )
  useEffect(() => {
    refetch()
  }, [songId])

  return (
    <SongContext.Provider
      value={{ songId, song, setSongId, setSong, data, isLoading, isError }}
    >
      {children}
    </SongContext.Provider>
  )
}

type SongContextProps = {
  songId: number
  song: Song
  setSongId: Dispatch<SetStateAction<number>>
  setSong: Dispatch<SetStateAction<Song>>
  data: Lyric | undefined
  isLoading: boolean
  isError: boolean
}

type SongProviderProps = {
  children: React.ReactNode
}

export { SongContext, SongProvider }
