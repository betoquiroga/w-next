import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import ChaptersPanel from "./ChaptersSection/ChaptersPanel"

const ChaptersSection = () => {
  return (
    <div className="bg-ww-content rounded col-span-3 overflow-y-scroll justify-between">
      <Tab.Group>
        <TabsHeader items={["Capítulos", "Opciones"]} />
        <Tab.Panels className="p-4">
          <ChaptersPanel />
          <Tab.Panel>Mostrará el historial del usuario</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default ChaptersSection
