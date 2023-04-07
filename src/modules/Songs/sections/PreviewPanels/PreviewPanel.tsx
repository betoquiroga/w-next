import { Tab } from "@headlessui/react"
import ActionsSection from "../ActionsSection"
import PreviewCurrent from "./PreviewCurrent"
import PreviewHeader from "./PreviewHeader"
import PreviewOptions from "./PreviewOptions"

const PreviewPanel = () => {
  return (
    <Tab.Panel className="preview">
      <PreviewHeader text="Pantalla principal - TV" select />
      <PreviewCurrent />
      <PreviewOptions />
      <ActionsSection />
    </Tab.Panel>
  )
}

export default PreviewPanel
