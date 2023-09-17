import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import PreviewPanel from "@modules/Songs/sections/PreviewPanels/PreviewPanel"

const PreviewSection = () => {
  return (
    <div className="song-section hidden md:block lg:block">
      <Tab.Group>
        <TabsHeader items={["Vista previa", "Configuraciones rápidas"]} />
        <Tab.Panels className="p-4">
          <PreviewPanel />
          <Tab.Panel>Aquí irán los listados creados</Tab.Panel>
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default PreviewSection
