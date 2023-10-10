import { Tab } from "@headlessui/react"
import React, { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"

const UploadPanel = ({ endpoint, UpdateImagesPanel }: ImageUploaderProps) => {
  const [files, setFiles] = useState<File[]>([])
  const MAX_FILES = 10

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        if (files.length + acceptedFiles.length > MAX_FILES) {
          alert("Solo se permiten un máximo de 10 archivos.")
        } else {
          setFiles((prevFiles) => [...prevFiles, ...acceptedFiles])
        }
      }
    },
    [files]
  )

  const removeFile = (fileToRemove: File) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((file) => file !== fileToRemove)
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
        },
      })

      if (!response.ok) {
        throw new Error("Error cargando las imágenes")
      }

      alert("Se subieron las imágenes correctamente")
      UpdateImagesPanel()
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
          <div
            {...getRootProps()}
            className={`border-2 border-gray-300 border-dashed rounded-lg p-4 cursor-pointer ${
              files.length > 0 ? "hidden" : ""
            } hover:bg-gray-100 dark:border-gray-500 dark:hover:border-gray-500 dark:hover:bg-gray-800 flex flex-col items-center justify-center`}
          >
            <input {...getInputProps()} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p>Arrastre archivos aquí o haga clic para seleccionar archivos</p>
          </div>
          {files.length > 0 && (
            <div className="mb-4">
              {files.map((file) => (
                <div
                  key={file.name}
                  className="relative inline-block mr-4 mb-4"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${file.name}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <button
                    className="bg-ww-scroll flex justify-center align-middle rounded-full text-ww-normal text-center w-6 h-6 absolute top-0 right-0 hover:bg-red-600"
                    onClick={() => removeFile(file)}
                  >
                    x
                  </button>
                </div>
              ))}

              <div
                {...getRootProps()}
                className={`border-2 border-gray-300 border-dashed rounded-lg p-4 cursor-pointer ${
                  files.length === 0 ? "hidden" : ""
                } hover:bg-gray-100 dark:border-gray-500 dark:hover:border-gray-500 dark:hover:bg-gray-800 flex flex-col items-center justify-center`}
              >
                <input {...getInputProps()} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p>Añadir más archivos</p>
              </div>
              <button className="transition-all py-2 px-4 rounded-lg mt-4 mb-4 bg-ww-green-800 w-full">
                Subir archivos
              </button>
            </div>
          )}
        </form>
      </div>
    </Tab.Panel>
  )
}

interface ImageUploaderProps {
  endpoint: string
  UpdateImagesPanel: () => void
}

export default UploadPanel
