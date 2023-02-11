import { LyricsContext } from "@context/LyricsContext"
import { Tab } from "@headlessui/react"
import { useContext } from "react"
import LyricsList from "./LyricsList"
import LyricsOptions from "./LyricsOptions"

const LyricsPanel = () => {
  const { data, isLoading, isError } = useContext(LyricsContext)

  if (isLoading) return <Tab.Panel>Cargando...</Tab.Panel>
  if (isError) return <Tab.Panel>Error...</Tab.Panel>

  return (
    <Tab.Panel>
      <LyricsOptions />
      {data && <LyricsList data={data} />}
    </Tab.Panel>
  )
}

export default LyricsPanel
