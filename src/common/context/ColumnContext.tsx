import { Dispatch, createContext, useState } from "react"

export const ColumnContext = createContext<ColumnContextProps>(
  {} as ColumnContextProps
)

export const ColumnProvider = ({ children }: ColumnProviderProps) => {
  const [activeColumn, setActiveColumn] = useState<number>(1)

  return (
    <ColumnContext.Provider value={{ activeColumn, setActiveColumn }}>
      {children}
    </ColumnContext.Provider>
  )
}

interface ColumnContextProps {
  activeColumn: number
  setActiveColumn: Dispatch<React.SetStateAction<number>>
}

interface ColumnProviderProps {
  children: React.ReactNode
}
