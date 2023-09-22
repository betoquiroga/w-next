import { createContext, useEffect, useState } from "react"

const SongOrderContext = createContext({} as SongMenuContextProps)

const SongMenuProvider = ({ children }: SongMenuProviderProps) => {
  const [order, setOrder] = useState(() => {
    const storedOrder = localStorage.getItem("song-order")
    return storedOrder || "previous"
  })

  const updateOrder = (newOrder: string) => {
    setOrder(newOrder)
    localStorage.setItem("song-order", newOrder)
  }

  useEffect(() => {
    const storedOrder = localStorage.getItem("song-order")
    if (storedOrder) {
      setOrder(storedOrder)
    }
  }, [])

  return (
    <SongOrderContext.Provider value={{ order, updateOrder }}>
      {children}
    </SongOrderContext.Provider>
  )
}

type SongMenuContextProps = {
  order: string
  updateOrder: (newOrder: string) => void
}

type SongMenuProviderProps = {
  children: React.ReactNode
}

export { SongOrderContext, SongMenuProvider }
