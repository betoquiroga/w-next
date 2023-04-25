import { SongsContext } from "@context/SongsContext"
import { Song } from "@interfaces/song.interface"
import axios from "axios"
import Link from "next/link"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { TOKEN_NAME } from "src/common/constants/auth"
import { WW_API_DOMAIN } from "src/common/constants/domains"

const SongsView = () => {
  const { data, isLoading, isError } = useContext(SongsContext)
  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    setSongs(data as Song[])
  }, [data])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
    if (value === "") {
      setSongs(data as Song[])
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
          b.author.toLowerCase().includes(value.toLowerCase())
      )

      setSongs(newData)
    }
  }

  const deleteSong = (id: number) => {
    if (window.confirm("Se eliminará completamente la canción")) {
      axios
        .delete(`http://${WW_API_DOMAIN}/songs/${id}`, {
          headers: {
            Authorization: localStorage.getItem(TOKEN_NAME),
          },
        })
        .then((r) => {
          console.log(r)
          alert("Canción eliminada")
        })
    }
  }

  if (isLoading) return <p>Cargando...</p>
  if (isError) return <p>Error</p>
  return (
    <div className="p-4 pl-[5rem] bg-ww-content pb-16">
      <div className="max-w-[80rem] m-auto">
        <div className="mb-4 pt-8">
          <h1 className="text-3xl">Canciones</h1>
        </div>
        <div className="mb-6">
          <Link
            href="/admin/songs/create"
            className="transition-all py-2 px-4 rounded-lg bg-ww-green-800"
          >
            Agregar canción
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
                <th>Título</th>
                <th>Autor</th>
                <th>Estilo</th>
                <th>Ver canción</th>
                <th>Agregar letra</th>
                <th>Eliminar canción</th>
              </tr>
            </thead>
            <tbody>
              {songs &&
                songs.map((song) => (
                  <tr key={song.id}>
                    <td>{song.id}</td>
                    <td>{song.title}</td>
                    <td>{song.author}</td>
                    <td>{song.style?.id || "-"}</td>
                    <td>
                      <Link
                        className="text-ww-green-600"
                        href={`/admin/songs/${song.id}`}
                      >
                        Ver canción
                      </Link>
                    </td>
                    <td>
                      <Link
                        className="text-ww-green-600"
                        href={`/crear/${song.id}`}
                      >
                        Agregar letra
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteSong(song.id)}
                        className="text-ww-green-600"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              {songs?.length === 0 && (
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

export default SongsView
