import { Song } from "src/common/interfaces/song.interface"
import { useQuery } from "@tanstack/react-query"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react"
import { getSong } from "../api/songs/songs.api"

const SongsContext = createContext({} as SongContextProps)

const SongsProvider = ({ children }: SongProviderProps) => {
  const [activeSongId, setActiveSongId] = useState(0)
  const { data, isLoading, isError, refetch } = useQuery<Song[], Error>(
    ["ALL_SONGS"],
    getSong
  )

  useEffect(() => {
    const active = data?.find((d: Song) => d.active)
    if (data && active) {
      setActiveSongId(active.id)
      refetch()
    }
  }, [activeSongId, data])

  return (
    <SongsContext.Provider
      value={{ activeSongId, setActiveSongId, data, isLoading, isError }}
    >
      {children}
    </SongsContext.Provider>
  )
}

type SongContextProps = {
  activeSongId: number
  setActiveSongId: Dispatch<SetStateAction<number>>
  data: Song[] | undefined
  isLoading: boolean
  isError: boolean
}

type SongProviderProps = {
  children: React.ReactNode
}

export { SongsContext, SongsProvider }
