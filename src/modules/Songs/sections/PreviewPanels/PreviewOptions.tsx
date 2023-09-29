import { EffectsContext } from "@context/EffectsContext"
import { Effect } from "@interfaces/effect.interface"
<<<<<<< HEAD
import { useContext, useEffect } from "react"
=======
import { useContext, useEffect, useState } from "react"
>>>>>>> 557d40bc0f88454e77e742ff87b4068807575e19
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
    const newZoomState = !effects.zoom
    setEffects({
      zoom: newZoomState,
      particles: effects.particles,
    } as Effect)
    socket.emit("updateZoom", newZoomState)

    // updateDatabaseState(newZoomState, effects.particles)
  }

  const setParticles = () => {
    const newParticlesState = !effects.particles
    setEffects({
      zoom: effects.zoom,
      particles: newParticlesState,
    } as Effect)
    socket.emit("updateParticles", newParticlesState)

    // updateDatabaseState(effects.zoom, newParticlesState)
  }

  // const updateDatabaseState = async (zoom, particles) => {
  //   try {
  //     await api.updateEffectsState({ zoom, particles })
  //   } catch (error) {
  //     console.error("Error updating database state:", error)
  //   }
  // }

  useEffect(() => {
    socket.on("updateZoom", (newZoomState) => {
      setEffects((prevEffects) => ({
        ...prevEffects,
        zoom: newZoomState,
      }))
    })

    socket.on("updateParticles", (newParticlesState) => {
      setEffects((prevEffects) => ({
        ...prevEffects,
        particles: newParticlesState,
      }))
    })

    return () => {
      socket.off("updateZoom")
      socket.off("updateParticles")
    }
  }, [])

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
