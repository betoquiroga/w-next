import { Chapter } from "src/common/interfaces/chapter.interface"
import { Verse } from "src/common/interfaces/verses.interface"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react"
import axios from "axios"
import { BookContext } from "./BookContext"

const ChapterContext = createContext({} as ChapterContextProps)

const ChapterProvider = ({ children }: ChaptersProviderProps) => {
  const [chapter, setChapter] = useState(
    JSON.parse(localStorage.getItem("currentChapter") || "{}") as Chapter
  )
  const [loading, setLoading] = useState(false)
  const [verses, setVerses] = useState([] as Verse[])
  const [activeVerse, setActiveVerse] = useState(
    JSON.parse(localStorage.getItem("currentVerse") || "{}") as Verse
  )

  const { version } = useContext(BookContext)

  useEffect(() => {
    if (chapter?.chapter && version) {
      axios
        .get(
          `/bible/${version.abbreviation}/${chapter.book.engAbr}${chapter.chapter}.json`
        )
        .then((resp) => setVerses(resp.data))
    }
  }, [chapter])

  return (
    <ChapterContext.Provider
      value={{
        chapter,
        setChapter,
        verses,
        setVerses,
        loading,
        activeVerse,
        setActiveVerse,
      }}
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
  activeVerse: Verse
  setActiveVerse: Dispatch<SetStateAction<Verse>>
}

type ChaptersProviderProps = {
  children: React.ReactNode
}

export { ChapterContext, ChapterProvider }
