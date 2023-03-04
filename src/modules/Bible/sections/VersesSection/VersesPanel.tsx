import { ChapterContext } from "src/common/context/ChapterContext"
import { Tab } from "@headlessui/react"
import { useContext } from "react"
import VersesList from "./VersesList"
import { BookContext } from "@context/BookContext"

const VersesPanel = () => {
  const { verses } = useContext(ChapterContext)
  const { version } = useContext(BookContext)
  return (
    <Tab.Panel>
      <div className="p-4 ">
        <span className="text-ww-green-600">{version.title}</span>
      </div>
      <VersesList data={verses} />
    </Tab.Panel>
  )
}

export default VersesPanel
