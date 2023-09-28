import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import SongsPanel from "./SongsPanels/SongsPanel"
import { useContext } from "react"
import { ColumnContext } from "@context/ColumnContext"

const SongsSection = () => {
  const { activeColumn } = useContext(ColumnContext)
  return (
    <div className={`lg:block ${activeColumn !== 1 && "hidden"}`}>
      <div className="general-section h-[calc(100vh-95px)] lg:h-[calc(100vh-30px)]">
        <Tab.Group>
          <TabsHeader items={["Canciones", "Listas", "Historial"]} />
          <Tab.Panels className="p-4">
            <SongsPanel />
            <Tab.Panel>No hay nada aún</Tab.Panel>
            <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default SongsSection
