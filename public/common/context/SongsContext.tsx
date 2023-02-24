import { Lyric } from "@interfaces/lyrics.interface"
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
  const { data, isLoading, isError, refetch } = useQuery<Lyric, Error>(
    [`CURRENT_SONG_LYRICS-${songId}`],
    () => getLyrics(songId)
  )
  useEffect(() => {
    refetch()
  }, [songId])

  return (
    <SongContext.Provider
      value={{ songId, setSongId, data, isLoading, isError }}
    >
      {children}
    </SongContext.Provider>
  )
}

type SongContextProps = {
  songId: number
  setSongId: Dispatch<SetStateAction<number>>
  data: Lyric | undefined
  isLoading: boolean
  isError: boolean
}

type SongProviderProps = {
  children: React.ReactNode
}

export { SongContext, SongProvider }
