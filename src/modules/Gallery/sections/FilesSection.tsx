import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import { WW_API_DOMAIN, WW_PROTOCOL } from "src/common/constants/domains"
import ImagesPanel from "./ImagesSection/ImagesPanel"
import UploadPanel from "./ImagesSection/UploadPanel"
import VideosPanel from "./ImagesSection/VideosPanel"

const FilesSection = () => {
  return (
    <div className="bg-ww-content rounded lg:col-span-3 overflow-y-scroll max-h-[97vh]">
      <Tab.Group>
        <TabsHeader items={["Imagenes", "Videos", "Subir archivos"]} />
        <Tab.Panels className="p-4">
          <ImagesPanel />
          <VideosPanel />
          <UploadPanel
            endpoint={`${WW_PROTOCOL}://${WW_API_DOMAIN}/uploads/gallery`}
          />
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default FilesSection
