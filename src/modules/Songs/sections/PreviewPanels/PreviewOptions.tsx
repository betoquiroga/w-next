import { EffectsContext } from "@context/EffectsContext"
import { Effect } from "@interfaces/effect.interface"
import { useContext } from "react"

const PreviewOptions = () => {
  const { effects, setEffects } = useContext(EffectsContext)

  const setZoom = () => {
    setEffects({
      zoom: !effects.zoom,
      particles: effects.particles,
    } as Effect)
  }
  const setParticles = () => {
    setEffects({
      zoom: effects.zoom,
      particles: !effects.particles,
    } as Effect)
  }
  return (
    <div className="pt-4 mb-6 flex">
      <div className="mr-6 flex items-center">
        <label className="mr-2" htmlFor="transicion">
          Zoom
        </label>
        <input
          type="checkbox"
          id="toogleZoomP"
          checked={effects.zoom}
          onChange={setZoom}
        />
      </div>
      <div>
        <label className="mr-2" htmlFor="transicion">
          Partículas
        </label>
        <input
          type="checkbox"
          id="toogleZoomP"
          checked={effects.particles}
          onChange={setParticles}
        />
      </div>
    </div>
  )
}

export default PreviewOptions
