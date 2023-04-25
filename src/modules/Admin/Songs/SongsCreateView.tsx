import { Style } from "@interfaces/style.interface"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { getStyles } from "src/common/api/styles/styles.api"
import { WW_API_DOMAIN } from "src/common/constants/domains"

const SongsCreateView = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { data, isLoading, isError } = useQuery<Style[], Error>(
    ["ALL_STYLES"],
    getStyles
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const target = e.target as HTMLFormElement

    axios
      .post(
        `http://${WW_API_DOMAIN}/songs`,
        {
          title: target.songTitle.value,
          author: target.songAuthor.value,
          active: false,
          style: Number(target.songStyle.value),
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("tokenWW")}`,
          },
        }
      )
      .then(() => {
        target.reset()
        alert("canción creada")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (!data) {
    return <p>Cargando data</p>
  }

  return (
    <div className="p-4 pl-[5rem] bg-ww-content pb-16">
      <div className="max-w-[80rem] m-auto">
        <div className="mb-4 pt-8">
          <h1 className="text-3xl">Crear canción</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 grid-cols-2">
            <input
              className="input mb-4"
              type="text"
              placeholder="Título de la canción"
              name="songTitle"
            />
            <input
              className="input mb-4"
              type="text"
              placeholder="Autor de la canción"
              name="songAuthor"
            />
            <select name="songStyle" className="input mb-4">
              <option value="">Seleccionar estilo</option>
              {data?.map((style) => (
                <option key={style.id} value={style.id}>
                  {style.title}
                </option>
              ))}
            </select>
            <input
              className="col-span-2 transition-all py-2 px-4 rounded-lg bg-ww-green-800"
              type="submit"
              value={loading ? "Cargando" : "Enviar"}
              disabled={loading}
              placeholder="Ingrese texto para filtrar"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SongsCreateView
