import { useCallback, useState } from "react"
import FileUpload from "./components/FileUpload"
import { Tab } from "@headlessui/react"
import handleFileUpload from "./components/handleFileUpload"

const UploadPanel = ({ endpoint }: ImageUploaderProps) => {
  const [files, setFiles] = useState<File[]>([])
  const [isUploading, setIsUploading] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isUploading) return

    setIsUploading(true)

    const uploadSuccess = await handleFileUpload(files, endpoint)

    if (uploadSuccess) {
      setFiles([])
    }

    setIsUploading(false)
  }

  return (
    <Tab.Panel>
      <div>
        <form onSubmit={handleSubmit}>
          <FileUpload
            onDrop={onDrop}
            files={files}
            isUploading={isUploading}
            removeFile={removeFile}
          />
        </form>
      </div>
    </Tab.Panel>
  )
}

interface ImageUploaderProps {
  endpoint: string
}

export default UploadPanel
