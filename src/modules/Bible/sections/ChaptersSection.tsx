import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import ChaptersPanel from "./ChaptersSection/ChaptersPanel"
import { useContext } from "react"
import { ColumnContext } from "@context/ColumnContext"

const ChaptersSection = () => {
  const { activeColumn } = useContext(ColumnContext)
  return (
    <div className={`lg:block ${activeColumn !== 2 && "hidden"}`}>
      <Tab.Group>
        <TabsHeader items={["Capítulos", "Opciones"]} />
        <Tab.Panels className="general-section max-h-[70vh] md:max-h-[45vh] lg:max-h-[85vh] p-4">
          <ChaptersPanel />
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default ChaptersSection
