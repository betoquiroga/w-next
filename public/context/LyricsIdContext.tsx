import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react"

const LyricsIdContext = createContext({} as LyricsIdContextProps)

const LyricsIdProvider = ({ children }: LyricsIdProviderProps) => {
  const [lyricsId, setLyricsId] = useState(1)
  useEffect(() => {
    setLyricsId(1)
  }, [])

  return (
    <LyricsIdContext.Provider value={{ lyricsId, setLyricsId }}>
      {children}
    </LyricsIdContext.Provider>
  )
}

type LyricsIdContextProps = {
  lyricsId: number
  setLyricsId: Dispatch<SetStateAction<number>>
}

type LyricsIdProviderProps = {
  children: React.ReactNode
}

export { LyricsIdContext, LyricsIdProvider }
