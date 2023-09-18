import { number } from "joi"
import React, { ReactNode, createContext, useState } from "react"

interface ColumnContextProps {
  columns: number
  setColumns: React.Dispatch<React.SetStateAction<number>>
}

export const ColumnContext = createContext<ColumnContextProps>({
  columns: 1,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setColumns: () => {},
})

interface ColumnProviderProps {
  children: React.ReactNode
}

export const ColumnProvider = ({ children }: ColumnProviderProps) => {
  const [columns, setColumns] = useState<number>(1)

  return (
    <ColumnContext.Provider value={{ columns, setColumns }}>
      {children}
    </ColumnContext.Provider>
  )
}
