import { Tab } from "@headlessui/react"
import StyleList from "./StyleList"
import StyleHeader from "./StyleHeader"
import StylesSearch from "./StylesSearch"
import StyleCurrent from "./StyleCurrent"
import { Style } from "src/common/interfaces/style.interface"
import { useContext, useEffect, useState } from "react"
import { StyleContext } from "@context/StyleContext"
import { Spinner } from "@components/Spinner"

const StylePanel = () => {
  const { data, isLoading, isError } = useContext(StyleContext)
  const [style, setStyle] = useState<Style[]>([])

  useEffect(() => {
    setStyle(data as Style[])
  }, [data])
  if (isLoading)
    return (
      <Tab.Panel>
        <Spinner />
      </Tab.Panel>
    )
  if (isError) return <Tab.Panel>Error...</Tab.Panel>

  return (
    <Tab.Panel>
      <StyleHeader text="Estilo actual" />
      <StyleCurrent />
      <StyleHeader text="Otros estilos" />
      <StylesSearch />
      <StyleList data={style} />
    </Tab.Panel>
  )
}

export default StylePanel
