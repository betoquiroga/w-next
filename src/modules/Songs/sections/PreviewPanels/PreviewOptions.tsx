import { EffectsContext } from "@context/EffectsContext"
import { Effect } from "@interfaces/effect.interface"
import { useContext, useEffect, useState } from "react"
import { socket } from "socket/mainSocket"

const PreviewOptions = () => {
  const { effects, setEffects } = useContext(EffectsContext)
  const [effectsWs, setEffectsWs] = useState({ zoom: true, particles: false })

  useEffect(() => {
    socket.on("effects", (data: string) => {
      setEffectsWs(JSON.parse(data))
    })
  }, [])

  const setZoom = () => {
    setEffects({
      zoom: !effects.zoom,
      particles: effects.particles,
    } as Effect)
    socket.emit(
      "effects",
      JSON.stringify({
        zoom: !effects.zoom,
        particles: effects.particles,
      })
    )
  }
  const setParticles = () => {
    setEffects({
      zoom: effects.zoom,
      particles: !effects.particles,
    } as Effect)
    socket.emit(
      "effects",
      JSON.stringify({
        zoom: effects.zoom,
        particles: !effects.particles,
      })
    )
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
          checked={effectsWs?.zoom}
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
          checked={effectsWs?.particles}
          onChange={setParticles}
        />
      </div>
    </div>
  )
}

export default PreviewOptions
