import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import StylePanel from "./StylePanels/StylePanel"

const StyleSection = () => {
  return (
    <div className="bg-ww-content rounded col-span-3">
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
