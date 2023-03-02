import { Tab } from "@headlessui/react"
import StyleList from "./StyleList"
import StyleHeader from "./StyleHeader"
import StylesSearch from "./StylesSearch"
import StyleCurrent from "./StyleCurrent"
import { useQuery } from "@tanstack/react-query"
import { Style } from "src/common/interfaces/style.interface"
import { getStyles } from "src/common/api/styles/styles.api"

const StylePanel = () => {
  const { data, isLoading, isError } = useQuery<Style[], Error>(
    ["ALL_STYLES"],
    getStyles
  )

  if (isLoading) return <Tab.Panel>Cargando...</Tab.Panel>
  if (isError) return <Tab.Panel>Error...</Tab.Panel>

  return (
    <Tab.Panel>
      <StyleHeader text="Estilo actual" />
      <StyleCurrent />
      <StyleHeader text="Otros estilos" />
      <StylesSearch />
      <StyleList data={data} />
    </Tab.Panel>
  )
}

export default StylePanel
