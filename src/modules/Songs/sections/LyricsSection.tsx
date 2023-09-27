import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import LyricsPanel from "./LyricsPanels/LyricsPanel"
import { useContext } from "react"
import { ColumnContext } from "@context/ColumnContext"

const LyricsSection = () => {
  const { activeColumn } = useContext(ColumnContext)
  return (
    <div className={`lg:block ${activeColumn !== 2 && "hidden"}`}>
      <Tab.Group>
        <TabsHeader items={["Letras", "Detalles", "Configuración"]} />
        <Tab.Panels className="general-section max-h-[60vh] md:max-h-[50vh] lg:max-h-[90vh] p-4">
          <LyricsPanel />
          <Tab.Panel>Aquí irán los listados creados</Tab.Panel>
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default LyricsSection
