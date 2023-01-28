import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import { Song } from "@interfaces/song.interface"
import { useQuery } from "@tanstack/react-query"
import { getSongs } from "public/common/api/songs/songs.api"
import SongsPanel from "./SongsPanels/SongsPanel"

const SongsSection = () => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<Song[], Error>(["ALL_SONGS"], getSongs)

  if (isLoading) return <span>Cargando...</span>
  if (isError) return <p>Error...</p>

  return (
    <div className="bg-ww-content rounded col-span-3 overflow-y-scroll">
      <Tab.Group>
        <TabsHeader items={["Canciones", "Listas", "Historial"]} />
        <Tab.Panels className="p-4">
          <SongsPanel />
          <Tab.Panel>{JSON.stringify(data)}</Tab.Panel>
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default SongsSection
