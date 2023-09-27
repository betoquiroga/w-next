import { SongsContext } from "src/common/context/SongsContext"
import { Tab } from "@headlessui/react"
import SongList from "./SongsList"
import SongsOptions from "./SongsOptions"
import SongsSearch from "./SongsSearch"
import useSongsEffects from "@hooks/useSongsEffects"
import { useContext } from "react"
import { Spinner } from "@components/Spinner"

const SongsPanel = () => {
  const { data, isLoading, isError } = useContext(SongsContext)
  const { songs, setSongs, handleSearch } = useSongsEffects(
    data || [],
    isLoading,
    isError
  )

  if (isLoading)
    return (
      <>
        <Tab.Panel>Cargando...</Tab.Panel>
        <Spinner />
      </>
    )
  if (isError) return <Tab.Panel>Error...</Tab.Panel>

  return (
    <Tab.Panel>
      <SongsSearch onSearch={handleSearch} />
      <SongsOptions data={songs} setSongs={setSongs} />
      <SongList data={songs} />
    </Tab.Panel>
  )
}

export default SongsPanel
