import { Song } from "src/common/interfaces/song.interface"
import { useQuery } from "@tanstack/react-query"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react"
import { getSongs } from "../api/songs/songs.api"

const SongsContext = createContext({} as SongContextProps)

const SongsProvider = ({ children }: SongProviderProps) => {
  const [songId, setSongId] = useState(0)
  const { data, isLoading, isError, refetch } = useQuery<Song[], Error>(
    ["ALL_SONGS"],
    getSongs
  )
  useEffect(() => {
    refetch()
  }, [songId])

  return (
    <SongsContext.Provider
      value={{ songId, setSongId, data, isLoading, isError }}
    >
      {children}
    </SongsContext.Provider>
  )
}

type SongContextProps = {
  songId: number
  setSongId: Dispatch<SetStateAction<number>>
  data: Song[] | undefined
  isLoading: boolean
  isError: boolean
}

type SongProviderProps = {
  children: React.ReactNode
}

export { SongsContext, SongsProvider }
