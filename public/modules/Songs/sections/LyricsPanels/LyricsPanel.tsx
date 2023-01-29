import { Tab } from "@headlessui/react"
import { Lyric } from "@interfaces/lyrics.interface"
import { useQuery } from "@tanstack/react-query"
import { getLyrics } from "public/common/api/songs/lyrics.api"
import { LyricsIdContext } from "public/context/LyricsIdContext"
import { useContext } from "react"
import LyricsList from "./LyricsList"
import LyricsOptions from "./LyricsOptions"

const LyricsPanel = () => {
  const { lyricsId } = useContext(LyricsIdContext)
  const { data, isLoading, isError } = useQuery<Lyric, Error>(
    ["CURRENT_SONG_LYRICS"],
    () => getLyrics(lyricsId)
  )

  if (isLoading) return <Tab.Panel>Cargando...</Tab.Panel>
  if (isError) return <Tab.Panel>Error...</Tab.Panel>

  return (
    <Tab.Panel>
      <LyricsOptions />
      <LyricsList data={data} />
    </Tab.Panel>
  )
}

export default LyricsPanel
