import { createContext, Dispatch, SetStateAction, useState } from "react"

const ActiveLyricContext = createContext({} as ActiveLyricsContextProps)

const ActiveLyricProvider = ({ children }: ActiveLyricProviderProps) => {
  const [activeLyricId, setActiveLyricId] = useState(0)
  return (
    <ActiveLyricContext.Provider value={{ activeLyricId, setActiveLyricId }}>
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
}
