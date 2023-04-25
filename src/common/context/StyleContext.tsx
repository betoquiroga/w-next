import { Style } from "src/common/interfaces/style.interface"
import { createContext, Dispatch, SetStateAction, useState } from "react"
import { defaultStyle } from "../constants/style"
import { WW_LOGO } from "../constants/images"

const StyleContext = createContext({} as StyleContextProps)

const StyleProvider = ({ children }: StyleProviderProps) => {
  const [style, setStyle] = useState(defaultStyle(WW_LOGO as string))

  return (
    <StyleContext.Provider value={{ style, setStyle }}>
      {children}
    </StyleContext.Provider>
  )
}

type StyleContextProps = {
  style: Style
  setStyle: Dispatch<SetStateAction<Style>>
}

type StyleProviderProps = {
  children: React.ReactNode
}

export { StyleContext, StyleProvider }
