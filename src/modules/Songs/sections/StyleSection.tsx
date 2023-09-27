import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import StylePanel from "./StylePanels/StylePanel"
import { useContext } from "react"
import { ColumnContext } from "@context/ColumnContext"

const StyleSection = () => {
  const { activeColumn } = useContext(ColumnContext)
  return (
    <div className={`lg:block ${activeColumn !== 3 && "hidden"}`}>
      <Tab.Group>
        <TabsHeader items={["Estilos", "Ajustes del estilo"]} />
        <Tab.Panels className="general-section max-h-[60vh] md:max-h-[50vh] lg:max-h-[90vh] p-4">
          <StylePanel />
          <Tab.Panel>Aquí irán los listados creados</Tab.Panel>
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default StyleSection
