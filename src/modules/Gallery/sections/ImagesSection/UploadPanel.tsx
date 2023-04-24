import { Tab } from "@headlessui/react"
import React, { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"

interface ImageUploaderProps {
  endpoint: string
}

const UploadPanel = ({ endpoint }: ImageUploaderProps) => {
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

  const handleSubmit = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

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
        throw new Error("Error uploading image")
      }

      alert("Image uploaded successfully!")
    } catch (error) {
      console.error(error)
      alert("Error uploading image")
    }
  }

  return (
    <Tab.Panel>
      <div>
        <form onSubmit={handleSubmit}>
          {!preview && (
            <div
              {...getRootProps()}
              className="bg-ww-scroll p-16 text-center mb-6"
            >
              <input {...getInputProps()} />
              <p>
                Arrastre un archivo aquí o haga click para seleccionar un
                archivo
              </p>
            </div>
          )}
          {preview && (
            <>
              <div className="mb-4">
                <img
                  src={preview}
                  alt="Preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <button className="transition-all py-2 px-4 rounded-lg mb-4 bg-ww-green-800">
                Subir archivo
              </button>
            </>
          )}
        </form>
      </div>
    </Tab.Panel>
  )
}

export default UploadPanel
