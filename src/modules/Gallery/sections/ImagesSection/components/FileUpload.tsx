import { useDropzone } from "react-dropzone"
import UploadButton from "./UploadButton"

const FileUpload = ({
  onDrop,
  files,
  isUploading,
  removeFile,
}: FileUploadProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "video/mp4": [".mp4"],
      "video/mpeg": [".mpeg"],
    },
    onDrop,
  })

  return (
    <div>
      <div className="mb-4">
        <div className="mb-4 flex flex-wrap">
          {files.map((file) => (
            <div key={file.name} className="relative inline-block mr-4 mb-4">
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
                type="button"
                className="bg-ww-scroll flex justify-center items-center rounded-full text-ww-normal text-center w-6 h-6 absolute top-0 right-0 hover-bg-red-600"
                onClick={() => removeFile(file)}
              >
                x
              </button>
            </div>
          ))}
        </div>
        <div
          {...getRootProps()}
          className={`border-dashed border-2 border-gray-300 rounded-lg text-center cursor-pointer ${
            isDragActive ? "bg-ww-alt" : ""
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 mb-4 text-gray-500 dark-text-gray-400"
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
            {isDragActive ? (
              <p className="text-gray-500">Suelta las imágenes aquí...</p>
            ) : (
              <p className="text-gray-500">
                Arrastra y suelta imágenes aquí o haz clic para seleccionar.
              </p>
            )}
          </div>
        </div>
      </div>
      {files.length > 0 && <UploadButton isUploading={isUploading} />}
    </div>
  )
}

type FileUploadProps = {
  onDrop: (acceptedFiles: File[]) => void
  files: File[]
  isUploading: boolean
  removeFile: (file: File) => void
}

export default FileUpload
