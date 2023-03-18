import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import ImagesPanel from "./ImagesSection/ImagesPanel"
import UploadPanel from "./ImagesSection/UploadPanel"
import VideosPanel from "./ImagesSection/VideosPanel"

const FilesSection = () => {
  return (
    <div className="bg-ww-content rounded col-span-9 overflow-y-scroll">
      <Tab.Group>
        <TabsHeader items={["Imagenes", "Videos", "Subir archivos"]} />
        <Tab.Panels className="p-4">
          <ImagesPanel />
          <VideosPanel />
          <UploadPanel endpoint={"http://localhost:3040/uploads"} />
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default FilesSection
