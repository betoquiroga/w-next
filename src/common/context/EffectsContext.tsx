import { createContext, Dispatch, SetStateAction, useState } from "react"
import { Effect } from "@interfaces/effect.interface"

const INITIAL_STATE: Effect = {
  zoom: false,
  particles: false,
}

const EffectsContext = createContext({} as EffectsContextProps)

const EffectsProvider = ({ children }: EffectProviderProps) => {
  const [effects, setEffects] = useState(INITIAL_STATE)

  return (
    <EffectsContext.Provider value={{ effects, setEffects }}>
      {children}
    </EffectsContext.Provider>
  )
}

type EffectsContextProps = {
  effects: Effect
  setEffects: Dispatch<SetStateAction<Effect>>
}

type EffectProviderProps = {
  children: React.ReactNode
}

export { EffectsContext, EffectsProvider }
