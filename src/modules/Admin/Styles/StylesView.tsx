import { Style } from "@interfaces/style.interface"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Link from "next/link"
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react"
import { getStyles } from "src/common/api/styles/styles.api"
import { TOKEN_NAME } from "src/common/constants/auth"
import { WW_API_DOMAIN } from "src/common/constants/domains"

const StylesView = () => {
  const { data, isLoading, isError } = useQuery<Style[], Error>(
    ["ALL_STYLES"],
    getStyles
  )
  const [styles, setStyles] = useState<Style[]>([])

  useEffect(() => {
    setStyles(data as Style[])
  }, [data])

  const handleError = (
    e: SyntheticEvent<HTMLImageElement, Event>,
    type: string
  ) => {
    const target = e.target as HTMLImageElement
    target.src = type.includes("Video")
      ? "/images/styles/video.jpeg"
      : "/images/styles/error.jpeg"
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
    if (value === "") {
      setStyles(data as Style[])
      return
    }

    if (data) {
      const newData = data.filter(
        (b) =>
          b.title
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          b.details.toLowerCase().includes(value.toLowerCase())
      )

      setStyles(newData)
    }
  }

  const deleteSong = (id: number) => {
    if (window.confirm("Se eliminará completamente el estilo")) {
      axios
        .delete(`http://${WW_API_DOMAIN}/styles/${id}`, {
          headers: {
            Authorization: localStorage.getItem(TOKEN_NAME),
          },
        })
        .then((r) => {
          console.log(r)
          alert("Estilo eliminado")
        })
    }
  }

  if (isLoading) return <p>Cargando...</p>
  if (isError) return <p>Error</p>
  return (
    <div className="p-4 pl-[5rem] bg-ww-content pb-16">
      <div className="max-w-[80rem] m-auto">
        <div className="mb-4 pt-8">
          <h1 className="text-3xl">Estilos visuales</h1>
        </div>
        <div className="mb-6">
          <Link
            href="/admin/styles/create"
            className="transition-all py-2 px-4 rounded-lg bg-ww-green-800"
          >
            Agregar estilo
          </Link>
        </div>
        <input
          className="input mb-4"
          type="text"
          placeholder="Ingrese texto para filtrar"
          onChange={handleSearch}
        />
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Imagen</th>
                <th>Título</th>
                <th>Detalles</th>
                <th>Tipo de archivo</th>
                <th>Eliminar estilo</th>
              </tr>
            </thead>
            <tbody>
              {styles &&
                styles.map((style) => (
                  <tr key={style.id}>
                    <td>{style.id}</td>
                    <td>
                      <img
                        className="max-w-[5rem]"
                        src={`http://${WW_API_DOMAIN}/uploads/small/${style.image}`}
                        alt={`${style.id}-${style.title}`}
                        onError={(e) => handleError(e, style.type)}
                      />
                    </td>
                    <td>{style.title}</td>
                    <td>{style.details}</td>
                    <td>{style.type}</td>
                    <td>
                      <button
                        onClick={() => deleteSong(style.id)}
                        className="text-ww-green-600"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              {styles?.length === 0 && (
                <tr>
                  <td colSpan={6}> No hay canciones</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StylesView
