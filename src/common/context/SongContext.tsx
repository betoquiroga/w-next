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
import { getActive } from "../api/songs/songs.api"

const SongContext = createContext({} as SongContextProps)

const SongProvider = ({ children }: SongProviderProps) => {
  const [songId, setSongId] = useState(0)
  const [song, setSong] = useState({} as Song)
  const { data, isLoading, isError, refetch } = useQuery<Lyric[], Error>(
    ["CURRENT_SONG_LYRICS"],
    () => getLyrics(songId)
  )

  useEffect(() => {
    getActive().then((song) => {
      setSongId(song.id)
    })
  }, [])

  useEffect(() => {
    refetch()
  }, [songId])

  return (
    <SongContext.Provider
      value={{
        songId,
        song,
        setSongId,
        setSong,
        data,
        isLoading,
        isError,
      }}
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
  data: Lyric[] | undefined
  isLoading: boolean
  isError: boolean
}

type SongProviderProps = {
  children: React.ReactNode
}

export { SongContext, SongProvider }
