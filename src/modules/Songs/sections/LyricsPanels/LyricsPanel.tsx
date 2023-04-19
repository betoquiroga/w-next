import {
  ActiveLyricContext,
  ActiveLyricProvider,
} from "src/common/context/ActiveLyricContext"
import { SongContext } from "src/common/context/SongContext"
import { Tab } from "@headlessui/react"
import { useContext } from "react"
import LyricsList from "./LyricsList"
import LyricsOptions from "./LyricsOptions"
import { socket } from "socket/mainSocket"
import { Lyric } from "@interfaces/lyrics.interface"

const LyricsPanel = () => {
  const { data, isLoading, isError } = useContext(SongContext)
  const { activeLyricId, setActiveLyricId } = useContext(ActiveLyricContext)

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
