import { EffectsContext } from "@context/EffectsContext"
import { Effect } from "@interfaces/effect.interface"
import OptionsService from "@services/options/options.service"
import { useContext, useEffect, useState } from "react"
import { socket } from "socket/mainSocket"
import { updateOption } from "src/common/api/options/options.api"
import {
  WW_DEFAULT_PARTICLES_ID,
  WW_DEFAULT_ZOOM_ID,
} from "src/common/constants/options"
const PreviewOptions = () => {
  const optionsService = new OptionsService()
  const { effects, setEffects } = useContext(EffectsContext)
  const [effectsWs, setEffectsWs] = useState({ zoom: true, particles: false })
  useEffect(() => {
    let zoomActive = false
    optionsService
      .getOptions()
      .then((response) => {
        zoomActive =
          response.data.find((zoom) => zoom.id === Number(WW_DEFAULT_ZOOM_ID))
            ?.active || false
        const particlesActive =
          response.data.find(
            (particles) => particles.id === Number(WW_DEFAULT_PARTICLES_ID)
          )?.active || false
        const newEffectsWs = {
          zoom: zoomActive,
          particles: particlesActive,
        }
        setEffectsWs(newEffectsWs)
        updateOption(1, { active: zoomActive })
          .then(() => {
            // Maneja el éxito si es necesario
          })
          .catch((error) => {
            console.error("Error al actualizar la opción de Zoom:", error)
          })
      })
      .catch((error) => {
        console.error("Error al obtener las opciones:", error)
      })
    socket.on("effects", (data: string) => {
      setEffectsWs(JSON.parse(data))
    })
  }, [])
  const setZoom = () => {
    const newZoomValue = !effects.zoom
    setEffects({
      zoom: newZoomValue,
      particles: effects.particles,
    } as Effect)
    updateOption(1, { active: newZoomValue })
      .then(() => {
        // Maneja el éxito si es necesario
      })
      .catch((error) => {
        console.error("Error al actualizar la opción de Zoom:", error)
      })
    socket.emit(
      "effects",
      JSON.stringify({
        zoom: newZoomValue,
        particles: effects.particles,
      })
    )
  }
  const setParticles = () => {
    const newParticlesValue = !effects.particles
    setEffects({
      zoom: effects.zoom,
      particles: newParticlesValue,
    } as Effect)
    updateOption(2, { active: newParticlesValue })
      .then(() => {
        // Maneja el éxito si es necesario
      })
      .catch((error) => {
        console.error("Error al actualizar la opción de Partículas:", error)
      })
    socket.emit(
      "effects",
      JSON.stringify({
        zoom: effects.zoom,
        particles: newParticlesValue,
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
