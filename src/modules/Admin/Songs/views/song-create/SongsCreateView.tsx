import SongForm from "../../forms/SongForm"

const SongsCreateView = () => {
  return (
    <div className="p-4 pl-[5rem] bg-ww-content pb-16">
      <div className="max-w-[80rem] m-auto">
        <div className="mb-4 pt-8">
          <h1 className="text-3xl">Crear canción</h1>
        </div>
        <SongForm />
      </div>
    </div>
  )
}

export default SongsCreateView
