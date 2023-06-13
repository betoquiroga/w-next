import { lyricEmit } from "@helpers/socket/emit"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react"
import { SongContext } from "./SongContext"

const ActiveLyricContext = createContext({} as ActiveLyricsContextProps)

const ActiveLyricProvider = ({ children }: ActiveLyricProviderProps) => {
  const [activeLyricId, setActiveLyricId] = useState(0)
  const { data } = useContext(SongContext)

  const setNextSongVerse = () => {
    const nextSongVerse = data?.find((d) => activeLyricId + 1 === d.id)
    if (nextSongVerse) {
      lyricEmit(nextSongVerse.verse)
      setActiveLyricId(nextSongVerse.id)
    }
  }

  const setPrevSongVerse = () => {
    const nextSongVerse = data?.find((d) => activeLyricId - 1 === d.id)
    if (nextSongVerse) {
      lyricEmit(nextSongVerse.verse)
      setActiveLyricId(nextSongVerse.id)
    }
  }

  return (
    <ActiveLyricContext.Provider
      value={{
        activeLyricId,
        setActiveLyricId,
        setNextSongVerse,
        setPrevSongVerse,
      }}
    >
      {children}
    </ActiveLyricContext.Provider>
  )
}

export { ActiveLyricContext, ActiveLyricProvider }

type ActiveLyricProviderProps = {
  children: React.ReactNode
}

type ActiveLyricsContextProps = {
  activeLyricId: number
  setActiveLyricId: Dispatch<SetStateAction<number>>
  setNextSongVerse: () => void
  setPrevSongVerse: () => void
}
