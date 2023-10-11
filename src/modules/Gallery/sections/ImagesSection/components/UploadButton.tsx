const UploadButton = ({ isUploading }: UploadButtonProps) => {
  return (
    <button
      type="submit"
      className={`transition-all py-2 px-4 rounded-lg mb-4 w-full ${
        isUploading ? "bg-ww-green-900 text-ww-lighter" : "bg-ww-green-800"
      }`}
    >
      {isUploading ? "Cargando..." : "Subir archivos"}
    </button>
  )
}

type UploadButtonProps = {
  isUploading: boolean
}

export default UploadButton
