import axios from "axios"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { WW_API_DOMAIN } from "src/common/constants/domains"

const StylesCreateView = () => {
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
    let fileURL = ""
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch(`http://${WW_API_DOMAIN}/uploads/styles`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `${localStorage.getItem("tokenWW")}`,
          ContentType: "multipart/form-data",
        },
      })

      if (!response.ok) {
        throw new Error("Error uploading image")
      }

      const resp = await response.json()
      fileURL = resp.file
    } catch (error) {
      console.error(error)
      alert("Error uploading image")
    }

    const target = e.target as HTMLFormElement

    axios
      .post(
        `http://${WW_API_DOMAIN}/styles`,
        {
          title: target.styleTitle.value,
          details: target.styleDetails.value,
          type: target.styleType.value,
          image: fileURL,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("tokenWW")}`,
          },
        }
      )
      .then(() => {
        target.reset()
        setFile(null)
        setPreview(null)
        alert("Estilo creado")
      })
  }

  return (
    <div className="p-4 pl-[5rem] bg-ww-content pb-16">
      <div className="max-w-[80rem] m-auto">
        <div className="mb-4 pt-8">
          <h1 className="text-3xl">Crear estilo visual</h1>
        </div>
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
      </div>
    </div>
  )
}

export default StylesCreateView
