import { Tab } from "@headlessui/react"
import LyricsList from "./LyricsList"
import LyricsOptions from "./LyricsOptions"

const LyricsPanel = () => {
  return (
    <Tab.Panel>
      <LyricsOptions />
      <LyricsList />
    </Tab.Panel>
  )
}

export default LyricsPanel
