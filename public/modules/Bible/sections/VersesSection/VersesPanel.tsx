import { ChapterContext } from "@context/ChapterContext"
import { Tab } from "@headlessui/react"
import { useContext } from "react"
import VersesList from "./VersesList"

const VersesPanel = () => {
  const { verses } = useContext(ChapterContext)
  return (
    <Tab.Panel>
      <VersesList data={verses} />
    </Tab.Panel>
  )
}

export default VersesPanel
