import { Style } from "src/common/interfaces/style.interface"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react"
import { defaultStyle } from "../constants/style"
import { WW_STYLES_FOLDER } from "../constants/images"
import { useQuery } from "@tanstack/react-query"
import { getStyles } from "../api/styles/styles.api"
import { styleEmit } from "@helpers/socket/emit"

const StyleContext = createContext({} as StyleContextProps)

const StyleProvider = ({ children }: StyleProviderProps) => {
  const { data, isLoading, isError, refetch } = useQuery<Style[], Error>(
    ["ALL_STYLES"],
    getStyles
  )

  useEffect(() => {
    const fetchData = async () => {
      await refetch()
      const active = data?.find((d: Style) => d.active)
      if (active) {
        const newBackground = defaultStyle(active.image, WW_STYLES_FOLDER)
        setStyle(newBackground)
        styleEmit(newBackground)
      }
    }

    fetchData()
  }, [isLoading])

  const [style, setStyle] = useState({} as Style)

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
