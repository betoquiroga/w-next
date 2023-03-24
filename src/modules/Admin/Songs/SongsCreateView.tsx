import axios from "axios"
import { WW_API_DOMAIN } from "src/common/constants/domains"

const SongsCreateView = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement

    axios
      .post(
        `http://${WW_API_DOMAIN}/songs`,
        {
          title: target.songTitle.value,
          author: target.songAuthor.value,
          active: false,
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
            <input
              className="col-span-2 transition-all py-2 px-4 rounded-lg bg-ww-green-800"
              type="submit"
              value="Enviar"
              placeholder="Ingrese texto para filtrar"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SongsCreateView
