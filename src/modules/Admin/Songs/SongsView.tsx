import { SongsContext } from "@context/SongsContext"
import { Song } from "@interfaces/song.interface"
import Link from "next/link"
import { ChangeEvent, useContext, useEffect, useState } from "react"

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
                <th>Ver</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {songs &&
                songs.map((song) => (
                  <tr key={song.id}>
                    <td>{song.id}</td>
                    <td>{song.title}</td>
                    <td>{song.author}</td>
                    <td>
                      <button>View</button>
                    </td>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button>Delete</button>
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
