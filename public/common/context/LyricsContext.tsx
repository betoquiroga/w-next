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

const LyricsContext = createContext({} as LyricsContextProps)

const LyricsProvider = ({ children }: LyricsProviderProps) => {
  const [lyricsId, setLyricsId] = useState(1)
  const { data, isLoading, isError, refetch } = useQuery<Lyric, Error>(
    [`CURRENT_SONG_LYRICS-${lyricsId}`],
    () => getLyrics(lyricsId)
  )
  useEffect(() => {
    refetch()
  }, [lyricsId])

  return (
    <LyricsContext.Provider
      value={{ lyricsId, setLyricsId, data, isLoading, isError }}
    >
      {children}
    </LyricsContext.Provider>
  )
}

type LyricsContextProps = {
  lyricsId: number
  setLyricsId: Dispatch<SetStateAction<number>>
  data: Lyric | undefined
  isLoading: boolean
  isError: boolean
}

type LyricsProviderProps = {
  children: React.ReactNode
}

export { LyricsContext, LyricsProvider }
