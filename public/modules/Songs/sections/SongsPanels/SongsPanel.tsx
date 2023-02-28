import { SongsContext } from "@context/SongsContext"
import { Tab } from "@headlessui/react"
import { useContext } from "react"
import SongList from "./SongsList"
import SongsOptions from "./SongsOptions"
import SongsSearch from "./SongsSearch"

const SongsPanel = () => {
  const { data, isLoading, isError } = useContext(SongsContext)

  if (isLoading) return <Tab.Panel>Cargando...</Tab.Panel>
  if (isError) return <Tab.Panel>Error...</Tab.Panel>

  return (
    <Tab.Panel>
      <SongsSearch />
      <SongsOptions />
      <SongList data={data} />
    </Tab.Panel>
  )
}

export default SongsPanel
