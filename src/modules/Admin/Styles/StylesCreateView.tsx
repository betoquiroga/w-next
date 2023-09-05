import React from "react"
import StyleForm from "@modules/Admin/Styles/Components/Form/StylesForm"

const StylesCreateView = () => {
  return (
    <div className="p-4 pl-[5rem] bg-ww-content pb-16">
      <div className="max-w-[80rem] m-auto">
        <div className="mb-4 pt-8">
          <h1 className="text-3xl">Crear estilo visual</h1>
        </div>
        <StyleForm />
      </div>
    </div>
  )
}

export default StylesCreateView
