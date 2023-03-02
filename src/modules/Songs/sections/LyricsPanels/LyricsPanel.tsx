import { ActiveLyricProvider } from "src/common/context/ActiveLyricContext"
import { SongContext } from "src/common/context/SongContext"
import { Tab } from "@headlessui/react"
import { useContext } from "react"
import LyricsList from "./LyricsList"
import LyricsOptions from "./LyricsOptions"

const LyricsPanel = () => {
  const { data, isLoading, isError } = useContext(SongContext)

  if (isLoading) return <Tab.Panel>Cargando...</Tab.Panel>
  if (isError) return <Tab.Panel>Error...</Tab.Panel>

  return (
    <ActiveLyricProvider>
      <Tab.Panel>
        <LyricsOptions />
        {data && <LyricsList data={data} />}
      </Tab.Panel>
    </ActiveLyricProvider>
  )
}

export default LyricsPanel
