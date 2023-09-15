import { useDropzone } from "react-dropzone"
import { useParams } from "next/navigation"
import { getStyleById } from "src/common/api/styles/styles.api"
import { buildImageURL } from "src/common/constants/style"
import { handleSubmit } from "../Helpers/handlers"
import { useHandleDrop } from "../Helpers/handleDrop"
import { useEffect, useState } from "react"
import {
  WW_FILETYPE_ACCEPT,
  WW_STYLES_FOLDER,
} from "src/common/constants/images"

const StyleForm = () => {
  const [preview, setPreview] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [styleTitle, setStyleTitle] = useState("")
  const [styleDetails, setStyleDetails] = useState("")
  const [styleImage, setStyleImage] = useState<string | null>()
  const [isEditing, setIsEditing] = useState(false)

  const router = useParams()
  const { id } = router
  const idStyle = Number(id)

  useEffect(() => {
    if (idStyle > 0) {
      getStyleById(idStyle).then((data) => {
        setStyleTitle(data.title || "")
        setStyleDetails(data.details || "")
        setStyleImage(data.image)
        setIsEditing(true)
        console.log(data)
      })
    }
  }, [idStyle, isEditing])

  const { onDrop } = useHandleDrop(setFile, setPreview)

  const { getRootProps, getInputProps } = useDropzone({
    accept: WW_FILETYPE_ACCEPT,
    onDrop,
  })

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit(
      file,
      styleTitle,
      styleDetails,
      isEditing,
      idStyle,
      setStyleTitle,
      setStyleDetails,
      setPreview,
      setStyleImage
    )
  }
  return (
    <form onSubmit={handleSubmitForm}>
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
        {styleImage && (
          <div>
            <span>Imagen actual:</span>
            {
              <img
                className="max-w-[20rem]"
                src={buildImageURL(styleImage, WW_STYLES_FOLDER, "small")}
                alt="Imagen previa"
              />
            }
          </div>
        )}
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
          className="col-span-2 transition-all py-2 px-4 rounded-lg bg-ww-green-800 hover:bg-ww-green-700"
          type="submit"
          value={isEditing ? "Editar" : "Crear"}
        />
      </div>
    </form>
  )
}
export default StyleForm
