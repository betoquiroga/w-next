import React, { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { createStyle } from "src/common/api/styles/styles.api"
import { uploadImage } from "@modules/Admin/Styles/Components/Form/StylesUploadImages"
import { WW_FILETYPE_ACCEPT } from "src/common/constants/images"

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
    accept: WW_FILETYPE_ACCEPT,
    onDrop,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("HEY!")
    if (!file) {
      alert("No pusiste imagen")
      return
    }
    const fileURL = await uploadImage(file)

    const target = e.target as HTMLFormElement

    try {
      await createStyle({
        title: target.styleTitle.value,
        details: target.styleDetails.value,
        type: "Imagen",
        image: fileURL,
      })

      target.reset()
      setFile(null)
      setPreview(null)
      alert("Estilo creado")
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
          required
        />
        <input
          className="input mb-4"
          type="text"
          placeholder="Detalles"
          name="styleDetails"
          required
        />
        {!preview && (
          <div
            {...getRootProps()}
            className="input mb-4 col-span-2 text-center"
          >
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