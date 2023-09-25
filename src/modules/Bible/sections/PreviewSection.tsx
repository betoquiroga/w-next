import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import PreviewPanel from "@modules/Songs/sections/PreviewPanels/PreviewPanel"
import { useContext } from "react"
import { ColumnContext } from "@context/ColumnContext"

const PreviewSection = () => {
  const { activeColumn } = useContext(ColumnContext)
  return (
    <div className={`md:block ${activeColumn !== 4 && "hidden"}`}>
      <Tab.Group>
        <TabsHeader items={["Vista previa", "Configuraciones rápidas"]} />
        <Tab.Panels className="general-section max-h-[70vh] md:max-h-[45vh] lg:max-h-[90vh] p-4">
          <PreviewPanel />
          <Tab.Panel>Aquí irán los listados creados</Tab.Panel>
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default PreviewSection
