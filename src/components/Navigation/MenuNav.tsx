import Link from "next/link"

const MenuNav = () => {
  return (
    <>
      <Link className="text-ww-title" href={"/songs"}>
        Canciones
      </Link>
      <Link className="text-ww-title" href={"/bible"}>
        Biblia
      </Link>
      <Link className="text-ww-title" href={"/gallery"}>
        Galeria
      </Link>
      <Link className="text-ww-title" href={"/admin"}>
        Administracion del sistema
      </Link>
      <Link className="text-ww-title" href={"/"}>
        Perfil de usuario
      </Link>
    </>
  )
}

export default MenuNav
