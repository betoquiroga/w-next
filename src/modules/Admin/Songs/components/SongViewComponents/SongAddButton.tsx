import Link from "next/link"

const SongAddButton = () => {
  return (
    <div className="mb-6">
      <Link href="/admin/songs/create" className="ww-button">
        Agregar canción
      </Link>
    </div>
  )
}

export default SongAddButton
