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
import { bibleEmit, verseEmit } from "@helpers/socket/emit"

const ChapterContext = createContext({} as ChapterContextProps)

const ChapterProvider = ({ children }: ChaptersProviderProps) => {
  let currentChapter = "{}"
  let currentVerse = "{}"
  if (typeof localStorage !== "undefined") {
    currentChapter = localStorage?.getItem("currentChapter") as string
    currentVerse = localStorage?.getItem("currentVerse") as string
  }
  const [chapter, setChapter] = useState(JSON.parse(currentChapter) as Chapter)
  const [loading, setLoading] = useState(false)
  const [verses, setVerses] = useState([] as Verse[])
  const [activeVerse, setActiveVerse] = useState(
    JSON.parse(currentVerse) as Verse
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

  const setNextVerse = () => {
    const nextVerse = verses.find((v) => activeVerse.verse + 1 === v.verse)
    if (nextVerse) sendVerse(nextVerse)
  }

  const setPrevVerse = () => {
    const prevVerse = verses.find((v) => activeVerse.verse - 1 === v.verse)
    if (prevVerse) sendVerse(prevVerse)
  }

  const sendVerse = (data: Verse) => {
    setActiveVerse(data)
    bibleEmit(data?.text)
    verseEmit(
      `${chapter.book.title} ${chapter.chapter}:${data.verse} (${version.abbreviation})`
    )
  }

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
        setNextVerse,
        setPrevVerse,
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
  setNextVerse: () => void
  setPrevVerse: () => void
}

type ChaptersProviderProps = {
  children: React.ReactNode
}

export { ChapterContext, ChapterProvider }
