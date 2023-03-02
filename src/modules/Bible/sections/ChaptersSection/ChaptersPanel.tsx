import { BookContext } from "src/common/context/BookContext"
import { Tab } from "@headlessui/react"
import { useContext } from "react"
import ChaptersList from "./ChaptersList"

const ChaptersPanel = () => {
  const { book } = useContext(BookContext)

  const data = []
  for (let i = 1; i <= book.chapters; i++) {
    data.push(i)
  }

  return (
    <Tab.Panel>
      <ChaptersList data={data} />
    </Tab.Panel>
  )
}

export default ChaptersPanel
