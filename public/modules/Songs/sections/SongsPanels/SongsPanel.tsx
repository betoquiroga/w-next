import { Tab } from "@headlessui/react"
import { Song } from "@interfaces/song.interface"
import { useQuery } from "@tanstack/react-query"
import { getSongs } from "public/common/api/songs/songs.api"
import SongList from "./SongsList"
import SongsOptions from "./SongsOptions"
import SongsSearch from "./SongsSearch"

const SongsPanel = () => {
  const { data, isLoading, isError } = useQuery<Song[], Error>(
    ["ALL_SONGS"],
    getSongs
  )

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
