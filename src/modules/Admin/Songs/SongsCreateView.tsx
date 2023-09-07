import SongForm from "./components/Forms/SongForm"
import { useSearchParams } from "next/navigation"

const SongsCreateView = () => {
  const searchParams = useSearchParams()
  const id = parseInt(searchParams.get("id") ?? "", 10)
  const title = searchParams.get("title") ?? ""
  const author = searchParams.get("author") ?? ""
  const isEditing = searchParams.get("edit") === "true"

  return (
    <div className="p-4 pl-[5rem] bg-ww-content pb-16">
      <div className="max-w-[80rem] m-auto">
        <div className="mb-4 pt-8">
          <h1 className="text-3xl">Crear canción</h1>
        </div>
        <SongForm isEditing={isEditing} initialData={{ id, title, author }} />
      </div>
    </div>
  )
}

export default SongsCreateView
