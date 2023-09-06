import { Style } from "src/common/interfaces/style.interface"
import { createContext, Dispatch, SetStateAction, useState } from "react"
import { defaultStyle } from "../constants/style"
import { WW_LOGO, WW_STYLES_FOLDER } from "../constants/images"
import { useQuery } from "@tanstack/react-query"
import { getStyles } from "../api/styles/styles.api"

const StyleContext = createContext({} as StyleContextProps)

const StyleProvider = ({ children }: StyleProviderProps) => {
  const [style, setStyle] = useState(
    defaultStyle(WW_LOGO as string, WW_STYLES_FOLDER)
  )
  const { data, isLoading, isError } = useQuery<Style[], Error>(
    ["ALL_STYLES"],
    getStyles
  )

  return (
    <StyleContext.Provider
      value={{ style, setStyle, data, isLoading, isError }}
    >
      {children}
    </StyleContext.Provider>
  )
}

type StyleContextProps = {
  style: Style
  setStyle: Dispatch<SetStateAction<Style>>
  data: Style[] | undefined
  isLoading: boolean
  isError: boolean
}

type StyleProviderProps = {
  children: React.ReactNode
}

export { StyleContext, StyleProvider }
