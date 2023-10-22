import { useCallback } from "react"

export function useHandleDrop(
  setFile: (file: File | null) => void,
  setPreview: (preview: string | null) => void
) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const imageFile = acceptedFiles[0]
        setFile(imageFile)
        setPreview(URL.createObjectURL(imageFile))
      }
    },
    [setFile, setPreview]
  )

  return { onDrop }
}
