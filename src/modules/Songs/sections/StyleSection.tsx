import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import StylePanel from "./StylePanels/StylePanel"
import { useContext } from "react"
import { ColumnContext } from "@context/ColumnContext"

const StyleSection = () => {
  const { activeColumn } = useContext(ColumnContext)
  return (
    <div className={`song-section lg:block ${activeColumn !== 3 && "hidden"}`}>
      <Tab.Group>
        <TabsHeader items={["Estilos", "Ajustes del estilo"]} />
        <Tab.Panels className="p-4">
          <StylePanel />
          <Tab.Panel>Aquí irán los listados creados</Tab.Panel>
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default StyleSection
