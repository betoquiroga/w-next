import { Tab } from "@headlessui/react"
import StyleList from "./StyleList"
import StyleHeader from "./StyleHeader"
import StylesSearch from "./StylesSearch"
import StyleCurrent from "./StyleCurrent"

const StylePanel = () => {
  return (
    <Tab.Panel>
      <StyleHeader text="Estilo actual" />
      <StyleCurrent />
      <StyleHeader text="Otros estilos" />
      <StylesSearch />
      <StyleList />
    </Tab.Panel>
  )
}

export default StylePanel
