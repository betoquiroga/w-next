import React, { useCallback, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { createStyle, updateStyle } from "src/common/api/styles/styles.api"
import { uploadImage } from "@modules/Admin/Styles/Components/Form/StylesUploadImages"
import { WW_FILETYPE_ACCEPT } from "src/common/constants/images"
const StyleForm = ({ isEditing, initialData }: StyleFormProps) => {
  const [preview, setPreview] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [styleTitle, setStyleTitle] = useState<string>(initialData.title)
  const [styleDetails, setStyleDetails] = useState<string>(initialData.details)
  useEffect(() => {
    setStyleTitle(initialData.title)
    setStyleDetails(initialData.details)
  }, [initialData])
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const imageFile = acceptedFiles[0]
      setFile(imageFile)
      setPreview(URL.createObjectURL(imageFile))
    }
  }, [])
  const { getRootProps, getInputProps } = useDropzone({
    accept: WW_FILETYPE_ACCEPT,
    onDrop,
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) {
      alert("no pusiste imagen!!!")
      return
    }

    const fileURL = await uploadImage(file)
    const target = e.target as HTMLFormElement
    try {
      if (isEditing) {
        await updateStyle(initialData.id, {
          title: target.styleTitle.value,
          details: target.styleDetails.value,
          type: "Imagen",
          image: fileURL,
        })
        alert("Estilo actualizado")
      } else {
        await createStyle({
          title: target.styleTitle.value,
          details: target.styleDetails.value,
          type: "Imagen",
          image: fileURL,
        })
        alert("Estilo creado")
      }

      setStyleTitle("")
      setStyleDetails("")
      setFile(null)
      setPreview(null)
    } catch (error) {
      console.error(error)
      alert("Error creating/updating style")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 grid-cols-2">
        <input
          className="input mb-4"
          type="text"
          placeholder="Nombre del estilo"
          name="styleTitle"
          value={styleTitle}
          onChange={(e) => setStyleTitle(e.target.value)}
          required
        />
        <input
          className="input mb-4"
          type="text"
          placeholder="Detalles"
          name="styleDetails"
          value={styleDetails}
          onChange={(e) => setStyleDetails(e.target.value)}
          required
        />
        {!preview && (
          <div
            {...getRootProps()}
            className="input mb-4 col-span-2 text-center"
          >
            <input {...getInputProps()} />
            <p>
              {isEditing
                ? "Si quieres actualizar la imagen Dale click o arrastra una imagen aquí"
                : "De click o arrastre una imagen aquí"}
            </p>
          </div>
        )}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{ width: "192px", height: "108px", objectFit: "cover" }}
          />
        )}
        <input
          className="col-span-2 transition-all py-2 px-4 rounded-lg bg-ww-green-800"
          type="submit"
          value={isEditing ? "Editar" : "Crear"}
        />
      </div>
    </form>
  )
}
interface StyleFormProps {
  isEditing: boolean
  initialData: {
    id: number
    title: string
    details: string
  }
}
export default StyleForm
