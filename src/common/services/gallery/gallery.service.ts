import HttpRequest from "src/common/services/http-request"
import { ServiceResponse } from "src/common/services/response"
import { getToken } from "src/common/helpers/auth.helper"

const UPLOADS_ENDPOINT = "uploads"

export default class UploadService extends HttpRequest {
  constructor() {
    super()
    this.useToken(getToken())
    this.configRequest({
      endpoint: UPLOADS_ENDPOINT,
    })
  }

  async uploadFiles(files: File[], folder: string) {
    const formData = new FormData()
    files.forEach((file) => {
      formData.append("file", file)
    })

    this.configRequest({
      endpoint: `${UPLOADS_ENDPOINT}/${folder}`,
    })
    const response = await this.post(formData)
    return new ServiceResponse(response.data)
  }

  async getFiles(folder: string, type: string) {
    this.configRequest({
      endpoint: `${UPLOADS_ENDPOINT}/${folder}/${type}`,
    })

    const response = await this.get()
    return new ServiceResponse(response.data)
  }

  async deleteFile(folder: string, file: string) {
    this.configRequest({
      endpoint: `${UPLOADS_ENDPOINT}/${folder}/${file}`,
    })
    const response = await this.delete()
    return new ServiceResponse(response.data)
  }
}
