import { ActiveLyricContext } from "src/common/context/ActiveLyricContext"
import { SongContext } from "src/common/context/SongContext"
import { Tab } from "@headlessui/react"
import { useContext, useEffect } from "react"
import LyricsList from "./LyricsList"
import LyricsOptions from "./LyricsOptions"
import { SongsContext } from "@context/SongsContext"
import { Lyric } from "@interfaces/lyrics.interface"
import { Spinner } from "@components/Spinner"

const LyricsPanel = () => {
  const { data, isLoading, isError, setSongId } = useContext(SongContext)
  const { activeSongId } = useContext(SongsContext)
  const { setActiveLyricId } = useContext(ActiveLyricContext)

  useEffect(() => {
    setSongId(activeSongId)
    const active = data?.find((d: Lyric) => d.active)
    if (data && active) {
      setActiveLyricId(active.id)
    }
  }, [activeSongId, data])

  if (isLoading)
    return (
      <Tab.Panel>
        <Spinner />
      </Tab.Panel>
    )
  if (isError) return <Tab.Panel>Error...</Tab.Panel>

  return (
    <Tab.Panel>
      <LyricsOptions />
      {data && <LyricsList data={data} />}
    </Tab.Panel>
  )
}

export default LyricsPanel
