import ActionButton from "@modules/Songs/sections/ActionsPanel/ActionButton"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()

  const redirectToSongs = () => {
    router.push("/songs")
  }
  const redirectToBible = () => {
    router.push("/bible")
  }
  const redirectToGallery = () => {
    router.push("/gallery")
  }
  const redirectToAdmin = () => {
    router.push("/admin")
  }
  const redirectToPerfil = () => {
    router.push("/")
  }
  return (
    <>
      <div className="pt-4 px-20 h-[calc(100%-2px)]">
        <button
          onClick={redirectToSongs}
          className="w-full bg-ww-alt py-4 rounded mb-8 hover:bg-ww-green-800"
        >
          Canciones
        </button>
        <button
          onClick={redirectToBible}
          className="w-full bg-ww-alt py-4 rounded-lg mb-8 hover:bg-ww-green-800"
        >
          Biblia
        </button>
        <button
          onClick={redirectToGallery}
          className="w-full bg-ww-alt py-4 px-100 rounded-lg mb-8 hover:bg-ww-green-800"
        >
          Galeria
        </button>
        <button
          onClick={redirectToAdmin}
          className="w-full bg-ww-alt py-4 rounded-lg mb-8 hover:bg-ww-green-800"
        >
          Administración del sistema
        </button>
        <button
          onClick={redirectToPerfil}
          className="w-full bg-ww-alt py-4 rounded-lg mb-8 hover:bg-ww-green-800"
        >
          Perfíl de usuario
        </button>
      </div>
    </>
  )
}

export default Page
