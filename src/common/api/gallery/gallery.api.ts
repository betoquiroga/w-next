import UploadService from "@services/gallery/gallery.service"

const uploadService = new UploadService()

export const uploadFiles = async (files: File[], folder: string) => {
  const response = await uploadService.uploadFiles(files, folder)
  return response.data
}

export const getFiles = async (folder: string, type: string) => {
  const response = await uploadService.getFiles(folder, type)
  return response.data
}

export const deleteFile = async (folder: string, file: string) => {
  const response = await uploadService.deleteFile(folder, file)
  return response.data
}
