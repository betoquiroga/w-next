import { Tab } from "@headlessui/react"
import SongList from "./SongsList"
import SongsOptions from "./SongsOptions"
import SongsSearch from "./SongsSearch"

const SongsPanel = () => {
  return (
    <Tab.Panel className="overflow-y-scroll">
      <SongsSearch />
      <SongsOptions />
      <SongList />
    </Tab.Panel>
  )
}

export default SongsPanel
