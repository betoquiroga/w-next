import { Dispatch, createContext, useState } from "react"

export const SectionContext = createContext<SectionContextProps>(
  {} as SectionContextProps
)

export const SectionProvider = ({ children }: SectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<number>(1)

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  )
}

interface SectionContextProps {
  activeSection: number
  setActiveSection: Dispatch<React.SetStateAction<number>>
}

interface SectionProviderProps {
  children: React.ReactNode
}
