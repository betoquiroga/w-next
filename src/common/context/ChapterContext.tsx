import { Chapter } from "src/common/interfaces/chapter.interface"
import { Verse } from "src/common/interfaces/verses.interface"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react"

const ChapterContext = createContext({} as ChapterContextProps)

const ChapterProvider = ({ children }: ChaptersProviderProps) => {
  const [chapter, setChapter] = useState({} as Chapter)
  const [loading, setLoading] = useState(false)
  const [verses, setVerses] = useState([] as Verse[])

  useEffect(() => {
    if (chapter?.chapter) {
      setVerses([{ verse: 1, text: "Hola" }])
    }
  }, [chapter])

  return (
    <ChapterContext.Provider
      value={{ chapter, setChapter, verses, setVerses, loading }}
    >
      {children}
    </ChapterContext.Provider>
  )
}

type ChapterContextProps = {
  chapter: Chapter
  setChapter: Dispatch<SetStateAction<Chapter>>
  verses: Verse[]
  setVerses: Dispatch<SetStateAction<Verse[]>>
  loading: boolean
}

type ChaptersProviderProps = {
  children: React.ReactNode
}

export { ChapterContext, ChapterProvider }
