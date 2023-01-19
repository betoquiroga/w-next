import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import SongsPanel from "./SongsPanels/SongsPanel"

const SongsSection = () => {
  return (
    <div className="bg-ww-content rounded col-span-3 row-span-3">
      <Tab.Group>
        <TabsHeader items={["Canciones", "Listas", "Historial"]} />
        <Tab.Panels className="p-4">
          <SongsPanel />
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default SongsSection
