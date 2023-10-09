import { Tab } from "@headlessui/react"
import React, { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"

const UploadPanel = ({ endpoint }: ImageUploaderProps) => {
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles])
    }
  }, [])

  const removeFile = (fileIndex: number) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles]
      updatedFiles.splice(fileIndex, 1)
      return updatedFiles
    })
  }

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
    if (files.length === 0) return

    const formData = new FormData()

    files.forEach((file) => {
      formData.append("file", file)
    })

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `${localStorage.getItem("tokenWW")}`,
          ContentType: "multipart/form-data",
        },
      })

      if (!response.ok) {
        throw new Error("Error uploading images")
      }

      alert("Se subieron las imágenes correctamente")
      setFiles([])
    } catch (error) {
      console.error(error)
      alert("Error subiendo las imágenes")
    }
  }

  return (
    <Tab.Panel>
      <div>
        <form onSubmit={handleSubmit}>
          {!files.length && (
            <div
              {...getRootProps()}
              className="bg-ww-scroll p-16 text-center mb-6"
            >
              <input {...getInputProps()} />
              <p>
                Arrastre archivos aquí o haga clic para seleccionar archivos
              </p>
            </div>
          )}
          {files.length > 0 && (
            <>
              <div className="mb-4">
                {files.map((file, index) => (
                  <div key={index} className="relative inline-block mr-4">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index + 1}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 rounded-full text-white p-2"
                    >
                      <span className="text-xs">&times;</span>
                    </button>
                  </div>
                ))}
              </div>
              <button className="transition-all py-2 px-4 rounded-lg mb-4 bg-ww-green-800">
                Subir archivos
              </button>
            </>
          )}
        </form>
      </div>
    </Tab.Panel>
  )
}

interface ImageUploaderProps {
  endpoint: string
}
export default UploadPanel
