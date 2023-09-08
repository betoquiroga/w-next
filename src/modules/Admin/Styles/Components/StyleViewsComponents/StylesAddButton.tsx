import React from "react"
import Link from "next/link"

const StylesAddButton = () => {
  return (
    <div className="mb-6">
      <Link
        href="/admin/styles/create"
        className="transition-all py-2 px-4 rounded-lg bg-ww-green-800 link-hover button-effect"
      >
        Agregar estilo
      </Link>
    </div>
  )
}

export default StylesAddButton
