import Link from "next/link"

const AdminView = () => {
  return (
    <div className="p-4 pl-[5rem] bg-ww-content">
      <div className="max-w-[80rem] m-auto">
        <div className="mb-4 pt-8">
          <h1 className="text-3xl">Administración del sistema</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/admin/songs">Canciones</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminView
