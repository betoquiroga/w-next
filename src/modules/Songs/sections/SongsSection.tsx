import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import SongsPanel from "./SongsPanels/SongsPanel"
import { useContext } from "react"
import { ColumnContext } from "@context/ColumnContext"
import { SectionContext } from "@context/SectionContext"

const SongsSection = () => {
  const { activeColumn } = useContext(ColumnContext)
  return (
    <div
      className={`general-section lg:block ${activeColumn !== 1 && "hidden"}`}
    >
      <Tab.Group>
        <TabsHeader items={["Canciones", "Listas", "Historial"]} />
        <Tab.Panels className="sm:grid-cols-1 md:grid-cols-2 p-4">
          <SongsPanel />
          <Tab.Panel>No hay nada aún</Tab.Panel>
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default SongsSection
