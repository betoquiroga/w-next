import { Chapter } from "@interfaces/chapter.interface"
import { Verse } from "@interfaces/verses.interface"
import axios from "axios"
import jsdom from "jsdom"
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

  const resultado: Verse[] = []

  axios
    .get("https://www.biblegateway.com/passage/?search=Mateo+1&version=LBLA")
    .then((response) => {
      for (let i = 1; i <= 25; i++) {
        const html = response.data
        const parser = new DOMParser()
        const htmlDocument = parser.parseFromString(html, "text/html")

        const versos: Element[] = Array.from(
          htmlDocument.querySelectorAll(`.passage-text p span.Matt-1-${i}`)
        )

        versos.forEach((element) => {
          for (let i = 0; i < element.children.length; i++) {
            const childNode = element.children[i]
            if (
              childNode.nodeType === 1 &&
              (childNode.tagName.toLowerCase() === "sup" ||
                childNode.classList[0] === "chapternum")
            ) {
              element.removeChild(childNode)
            }
          }
        })

        versos.forEach((element) => {
          for (let i = 0; i < element.children.length; i++) {
            const childNode = element.children[i]
            if (
              childNode.nodeType === 1 &&
              childNode.tagName.toLowerCase() === "sup"
            ) {
              element.removeChild(childNode)
            }
          }
        })

        let resp = ""

        versos.forEach((v) => (resp = resp + " " + v.textContent))

        resultado.push({
          verse: Number(i),
          text: resp,
        })
      }

      resultado.sort((a, b) => a.verse - b.verse)
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })

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
