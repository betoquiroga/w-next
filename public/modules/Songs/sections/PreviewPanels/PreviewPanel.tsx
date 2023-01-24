import { Tab } from "@headlessui/react"
import PreviewCurrent from "./PreviewCurrent"
import PreviewHeader from "./PreviewHeader"
import PreviewOptions from "./PreviewOptions"

const PreviewPanel = () => {
  return (
    <Tab.Panel>
      <PreviewHeader text="Pantalla principal - TV" select />
      <PreviewCurrent />
      <PreviewHeader text="Opciones" />
      <PreviewOptions />
    </Tab.Panel>
  )
}

export default PreviewPanel
