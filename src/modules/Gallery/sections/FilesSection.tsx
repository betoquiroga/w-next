import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import { WW_API_DOMAIN, WW_PROTOCOL } from "src/common/constants/domains"
import { useContext } from "react"
import { ColumnContext } from "@context/ColumnContext"
import ImagesPanel from "./ImagesSection/ImagesPanel"
import UploadPanel from "./ImagesSection/UploadPanel"
import VideosPanel from "./ImagesSection/VideosPanel"

const FilesSection = () => {
  const { activeColumn } = useContext(ColumnContext)
  return (
    <div
      className={`general-section block md:col-span-1 lg:col-span-3 ${
        activeColumn !== 1 && "hidden"
      }`}
    >
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
