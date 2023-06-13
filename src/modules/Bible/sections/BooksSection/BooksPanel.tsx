import { Tab } from "@headlessui/react"
import BooksList from "./BooksList"
import books from "../../../../../__mock__/bible/books.json"
import BooksVersions from "./BooksVersions"
import { ChangeEvent, useState } from "react"
import BooksSearch from "./BooksSearch"

const BooksPanel = () => {
  const [data, setData] = useState(books.books)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
    if (value === "") {
      setData(books.books)
      return
    }

    const newData = books.books.filter(
      (b) =>
        b.title
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        b.abbreviation.toLowerCase().includes(value.toLowerCase())
    )

    setData(newData)
  }

  return (
    <Tab.Panel>
      <BooksVersions />
      <BooksSearch onSearch={handleSearch} />
      <BooksList data={data as []} />
    </Tab.Panel>
  )
}

export default BooksPanel
