import { Song } from "@interfaces/song.interface"
import Link from "next/link"
import SongsDeleteButton from "../SongsDeleteButton"

const SongTable = ({ songs }: SongTableProps) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Ver</th>
          <th>Editar</th>
          <th>Agregar letra</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.id}>
            <td>{song.id}</td>
            <td>{song.title}</td>
            <td>{song.author}</td>
            <td>
              <Link
                className="text-ww-green-600"
                href={`/admin/songs/${song.id}`}
              >
                Ver
              </Link>
            </td>
            <td>
              <Link
                className="text-ww-green-600"
                href={`/admin/songs/create?id=${song.id}&title=${song.title}&author=${song.author}&edit=true`}
              >
                Editar
              </Link>
            </td>
            <td>
              <Link className="text-ww-green-600" href={`/crear/${song.id}`}>
                Agregar letra
              </Link>
            </td>
            <td className="text-ww-green-600">
              {song.id && <SongsDeleteButton id={song.id} />}
            </td>
          </tr>
        ))}
        {songs.length === 0 && (
          <tr>
            <td colSpan={6}> No hay canciones</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

interface SongTableProps {
  songs: Song[]
}

export default SongTable
