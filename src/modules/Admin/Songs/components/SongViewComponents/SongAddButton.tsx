import Link from "next/link"

const SongAddButton = () => {
  return (
    <div className="mb-6">
      <Link
        href="/admin/songs/create"
        className="transition-all py-2 px-4 rounded-lg bg-ww-green-800 hover:bg-ww-green-700"
      >
        Agregar canción
      </Link>
    </div>
  )
}

export default SongAddButton
