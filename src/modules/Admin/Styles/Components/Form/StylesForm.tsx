import React, { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { createStyle } from "src/common/api/styles/styles.api"
import { uploadImage } from "@modules/Admin/Styles/Components/Form/StylesUploadImages"

const StyleForm = () => {
  const [preview, setPreview] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const imageFile = acceptedFiles[0]
      setFile(imageFile)
      setPreview(URL.createObjectURL(imageFile))
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "video/mp4": [".mp4"],
      "video/mpeg": [".mpeg"],
    },
    onDrop,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return
    const fileURL = await uploadImage(file)

    const target = e.target as HTMLFormElement

    try {
      await createStyle({
        title: target.styleTitle.value,
        details: target.styleDetails.value,
        type: target.styleType.value,
        image: fileURL,
        id: 0,
      })

      target.reset()
      setFile(null)
      setPreview(null)
      alert("Estilo creado si funcionaaaa")
    } catch (error) {
      console.error(error)
      alert("Error creating style")
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
        />
        <input
          className="input mb-4"
          type="text"
          placeholder="Detalles"
          name="styleDetails"
        />
        {!preview && (
          <div {...getRootProps()} className="input mb-4">
            <input {...getInputProps()} />
            <p>De click o arrastre una imagen aquí</p>
          </div>
        )}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{ width: "192px", height: "108px", objectFit: "cover" }}
          />
        )}
        <select className="input mb-4" name="styleType">
          <option value="">- Tipo de archivo -</option>
          <option value="Imagen">Imagen</option>
          <option value="Video">Video</option>
        </select>
        <input
          className="col-span-2 transition-all py-2 px-4 rounded-lg bg-ww-green-800"
          type="submit"
          value="Enviar"
        />
      </div>
    </form>
  )
}

export default StyleForm
