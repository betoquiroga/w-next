import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import VersesPanel from "./VersesSection/VersesPanel"

const VersesSection = () => {
  return (
    <div className="bg-ww-content rounded col-span-3 overflow-y-scroll">
      <Tab.Group>
        <TabsHeader items={["Versículos", "Versiones", "Ajustes"]} />
        <Tab.Panels className="p-4">
          <VersesPanel />
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default VersesSection
