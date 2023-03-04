import { Tab } from "@headlessui/react"
import BooksList from "./BooksList"
import books from "../../../../../__mock__/bible/books.json"
import BooksVersions from "./BooksVersions"

const BooksPanel = () => {
  return (
    <Tab.Panel>
      <BooksVersions />
      <BooksList data={books.books} />
    </Tab.Panel>
  )
}

export default BooksPanel
