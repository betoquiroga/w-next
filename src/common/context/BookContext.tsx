import { Book } from "src/common/interfaces/book.interface"
import { createContext, Dispatch, SetStateAction, useState } from "react"

const BookContext = createContext({} as BookContextProps)

const BooksProvider = ({ children }: BooksProviderProps) => {
  const [book, setBook] = useState({} as Book)
  return (
    <BookContext.Provider value={{ book, setBook }}>
      {children}
    </BookContext.Provider>
  )
}

type BookContextProps = {
  book: Book
  setBook: Dispatch<SetStateAction<Book>>
}

type BooksProviderProps = {
  children: React.ReactNode
}

export { BookContext, BooksProvider }
