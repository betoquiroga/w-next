import { useCallback, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { useParams } from "next/navigation"
import { uploadImage } from "@modules/Admin/Styles/Components/Form/StylesUploadImages"
import { WW_FILETYPE_ACCEPT } from "src/common/constants/images"
import {
  createStyle,
  getStyleById,
  updateStyle,
} from "src/common/api/styles/styles.api"
const StyleForm = () => {
  const [preview, setPreview] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [styleTitle, setStyleTitle] = useState("")
  const [styleDetails, setStyleDetails] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const router = useParams()
  const { id } = router
  const idStyle = typeof id === "string" ? parseInt(id, 10) : null
  useEffect(() => {
    if (idStyle !== null) {
      getStyleById(idStyle).then((data) => {
        setStyleTitle(data.title || "")
        setStyleDetails(data.details || "")
        setIsEditing(true)
      })
    }
  }, [idStyle, isEditing])
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
      alert("¡No has seleccionado una imagen!")
      return
    }
    try {
      const fileURL = await uploadImage(file)
      if (isEditing && idStyle !== null) {
        await updateStyle(idStyle, {
          title: styleTitle,
          details: styleDetails,
          type: "Imagen",
          image: fileURL,
        })
        alert("Estilo actualizado")
      } else {
        await createStyle({
          title: styleTitle,
          details: styleDetails,
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
      alert("Error al crear/actualizar el estilo")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 grid-cols-2">
        <input
          className="input mb-4 input-effect"
          type="text"
          placeholder="Nombre del estilo"
          name="styleTitle"
          value={styleTitle}
          onChange={(e) => setStyleTitle(e.target.value)}
          required
        />
        <input
          className="input mb-4 input-effect"
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
          className="col-span-2 transition-all py-2 px-4 rounded-lg bg-ww-green-800 link-hover button-effect"
          type="submit"
          value={isEditing ? "Editar" : "Crear"}
        />
      </div>
    </form>
  )
}
export default StyleForm
