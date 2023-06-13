import { Book } from "src/common/interfaces/book.interface"
import { createContext, Dispatch, SetStateAction, useState } from "react"
import { Version } from "@interfaces/version.interface"

const BookContext = createContext({} as BookContextProps)

const BooksProvider = ({ children }: BooksProviderProps) => {
  let currentBook = "{}"
  if (typeof localStorage !== "undefined") {
    currentBook = localStorage?.getItem("currentBook") as string
  }
  const [book, setBook] = useState(JSON.parse(currentBook) as Book)
  const [version, setVersion] = useState({
    title: "Nueva Biblia de las Américas",
    abbreviation: "NBLA",
  } as Version)
  return (
    <BookContext.Provider value={{ book, setBook, version, setVersion }}>
      {children}
    </BookContext.Provider>
  )
}

type BookContextProps = {
  book: Book
  setBook: Dispatch<SetStateAction<Book>>
  version: Version
  setVersion: Dispatch<SetStateAction<Version>>
}

type BooksProviderProps = {
  children: React.ReactNode
}

export { BookContext, BooksProvider }
