import { Style } from "src/common/interfaces/style.interface"
import { createContext, Dispatch, SetStateAction, useState } from "react"

const INITIAL_STATE: Style = {
  id: 0,
  title: "Contexto espacial",
  type: "Imagen JPEG",
  details: "Manrope Black / 24px",
  image: "/images/styles/bonito.jpeg",
}

const StyleContext = createContext({} as StyleContextProps)

const StyleProvider = ({ children }: StyleProviderProps) => {
  const [style, setStyle] = useState(INITIAL_STATE)

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
