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
import { socket } from "socket/mainSocket"

const SongsContext = createContext({} as SongContextProps)

const SongsProvider = ({ children }: SongProviderProps) => {
  const [activeSongId, setActiveSongId] = useState(0)
  const [selectedSongId, setSelectedSongId] = useState(0)
  const { data, isLoading, isError } = useQuery<Song[], Error>(
    ["ALL_SONGS"],
    getSong
  )

  const handleActiveSong = (data: string) => {
    setActiveSongId(Number(data))
  }

  useEffect(() => {
    socket.on("activeSong", handleActiveSong)
    return () => {
      socket.off("activeSong")
    }
  }, [])

  const handleDisableSong = (data: string) => {
    setActiveSongId(Number(data))
  }

  useEffect(() => {
    socket.on("disableSong", handleDisableSong)
    return () => {
      socket.off("disableSong")
    }
  }, [])

  useEffect(() => {
    const active = data?.find((d: Song) => d.active)
    if (data && active) {
      setActiveSongId(active.id)
    }
  }, [data])

  return (
    <SongsContext.Provider
      value={{
        activeSongId,
        setActiveSongId,
        data,
        isLoading,
        isError,
        selectedSongId,
        setSelectedSongId,
      }}
    >
      {children}
    </SongsContext.Provider>
  )
}

type SongContextProps = {
  activeSongId: number
  setActiveSongId: Dispatch<SetStateAction<number>>
  selectedSongId: number
  setSelectedSongId: Dispatch<SetStateAction<number>>
  data: Song[] | undefined
  isLoading: boolean
  isError: boolean
}

type SongProviderProps = {
  children: React.ReactNode
}

export { SongsContext, SongsProvider }
