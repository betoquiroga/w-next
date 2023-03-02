import { Tab } from "@headlessui/react"
import BooksList from "./BooksList"
import books from "../../../../../__mock__/bible/books"

const BooksPanel = () => {
  return (
    <Tab.Panel>
      <BooksList data={books.books} />
    </Tab.Panel>
  )
}

export default BooksPanel
