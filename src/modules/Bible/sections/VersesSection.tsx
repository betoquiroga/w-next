import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import VersesPanel from "./VersesSection/VersesPanel"
import { useContext } from "react"
import { ColumnContext } from "@context/ColumnContext"

const VersesSection = () => {
  const { activeColumn } = useContext(ColumnContext)
  return (
    <div className={`lg:block ${activeColumn !== 3 && "hidden"}`}>
      <Tab.Group>
        <TabsHeader items={["Versículos", "Versiones", "Ajustes"]} />
        <Tab.Panels className="general-section max-h-[70vh] md:max-h-[45vh] lg:max-h-[85vh] p-4">
          <VersesPanel />
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default VersesSection
