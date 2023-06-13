import { lyricEmit } from "@helpers/socket/emit"
import { Lyric } from "@interfaces/lyrics.interface"
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

  const lyrics = data?.sort((a: Lyric, b: Lyric) => a.order - b.order) || []
  const active = () =>
    lyrics.indexOf(lyrics.find((l) => activeLyricId === l.id) as Lyric)

  const setNextSongVerse = () => {
    let nextSongVerse
    if (activeLyricId === -1 && data) {
      nextSongVerse = lyrics[0]
    } else {
      nextSongVerse = lyrics[active() + 1]
    }
    if (nextSongVerse) {
      lyricEmit(nextSongVerse.verse)
      setActiveLyricId(nextSongVerse.id)
    }
  }

  const setPrevSongVerse = () => {
    const prevSongVerse = lyrics[active() - 1]
    if (prevSongVerse) {
      lyricEmit(prevSongVerse.verse)
      setActiveLyricId(prevSongVerse.id)
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
