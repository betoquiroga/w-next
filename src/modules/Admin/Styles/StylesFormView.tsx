import React from "react"
import StyleForm from "@modules/Admin/Styles/Components/Form/StylesForm"
import { useSearchParams } from "next/navigation"
const StylesFormView = () => {
  const searchParams = useSearchParams()
  const id = parseInt(searchParams.get("id") ?? "", 10)
  const title = searchParams.get("title") ?? ""
  const details = searchParams.get("details") ?? ""
  const isEditing = searchParams.get("edit") === "true"
  console.log(id, title, details, isEditing)
  return (
    <div className="p-4 pl-[5rem] bg-ww-content pb-16">
      <div className="max-w-[80rem] m-auto">
        <div className="mb-4 pt-8">
          <h1 className="text-3xl">
            {isEditing ? "Editar" : "Crear"} estilo visual
          </h1>
        </div>
        <StyleForm isEditing={isEditing} initialData={{ id, title, details }} />
      </div>
    </div>
  )
}
export default StylesFormView
