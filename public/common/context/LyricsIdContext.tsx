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

const LyricsIdContext = createContext({} as LyricsIdContextProps)

const LyricsIdProvider = ({ children }: LyricsIdProviderProps) => {
  const [lyricsId, setLyricsId] = useState(1)
  const { data, isLoading, isError, refetch } = useQuery<Lyric, Error>(
    [`CURRENT_SONG_LYRICS-${lyricsId}`],
    () => getLyrics(lyricsId)
  )
  useEffect(() => {
    refetch()
  }, [lyricsId])

  return (
    <LyricsIdContext.Provider
      value={{ lyricsId, setLyricsId, data, isLoading, isError }}
    >
      {children}
    </LyricsIdContext.Provider>
  )
}

type LyricsIdContextProps = {
  lyricsId: number
  setLyricsId: Dispatch<SetStateAction<number>>
  data: Lyric | undefined
  isLoading: boolean
  isError: boolean
}

type LyricsIdProviderProps = {
  children: React.ReactNode
}

export { LyricsIdContext, LyricsIdProvider }
