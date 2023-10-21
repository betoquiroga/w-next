import Link from "next/link"
import withAuth from "src/common/hoc/withAuth"

const AdminView = () => {
  return (
    <div className="p-4">
      <div className="max-w-[80rem] m-auto pl-[3rem]">
        <div className="mb-12 pt-8">
          <h1 className="text-4xl">Administración del sistema</h1>
          <p className="text-gray-400">Solo para admins facheros</p>
        </div>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-6 px-30">
          <Link
            className="bg-ww-alt text-center py-4 rounded hover:bg-ww-green-700"
            href="/admin/songs"
          >
            Canciones
          </Link>
          <Link
            className="bg-ww-alt text-center py-4 rounded hover:bg-ww-green-700"
            href="/admin/styles"
          >
            Estilos
          </Link>
        </div>
      </div>
    </div>
  )
}

export default withAuth(AdminView)
