import { GenericResponse } from "@interfaces/response.interface"
import { Style } from "@interfaces/style.interface"
import HttpRequest from "@services/http-request"
import { ServiceResponse } from "@services/response"

const ALL_STYLES_ENDPOINT = "styles"

export default class StyleService extends HttpRequest {
  async getStyles() {
    this.configRequest({
      endpoint: ALL_STYLES_ENDPOINT,
    })

    const response = await this.get<GenericResponse<Style[]>>()
    return new ServiceResponse(response.data)
  }
}
