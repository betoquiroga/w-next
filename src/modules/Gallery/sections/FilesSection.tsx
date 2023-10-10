import TabsHeader from "@components/Tabs/TabsHeader"
import { Tab } from "@headlessui/react"
import { WW_API_DOMAIN, WW_PROTOCOL } from "src/common/constants/domains"
import { ColumnContext } from "@context/ColumnContext"
import ImagesPanel from "./ImagesSection/ImagesPanel"
import UploadPanel from "./ImagesSection/UploadPanel"
import VideosPanel from "./ImagesSection/VideosPanel"
import { useContext, useState } from "react"

const FilesSection = () => {
  const { activeColumn } = useContext(ColumnContext)
  const [currentTab, setCurrentTab] = useState("uploads")

  const UpdateImagesPanel = () => {
    setCurrentTab("images")
  }

  return (
    <div
      className={`block md:col-span-1 lg:col-span-3 ${
        activeColumn !== 1 && "hidden"
      }`}
    >
      <div className="general-section h-[calc(100vh-95px)] lg:h-[calc(100vh-30px)]">
        <Tab.Group>
          <TabsHeader items={["Imagenes", "Videos", "Subir archivos"]} />
          <Tab.Panels className="p-4">
            <ImagesPanel key={currentTab} />
            <VideosPanel />
            <UploadPanel
              endpoint={`${WW_PROTOCOL}://${WW_API_DOMAIN}/uploads/gallery`}
              UpdateImagesPanel={UpdateImagesPanel}
            />
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default FilesSection
