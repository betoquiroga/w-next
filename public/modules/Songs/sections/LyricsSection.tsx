import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import SongsPanel from "./SongsPanels/SongsPanel"

const LyricsSection = () => {
  return (
    <div className="bg-ww-content rounded col-span-3 row-span-3">
      <Tab.Group>
        <TabsHeader items={["Letras", "Detalles", "Configuración"]} />
        <Tab.Panels className="p-4">
          <SongsPanel />
          <Tab.Panel>Aquí irán los listados creados</Tab.Panel>
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default LyricsSection
