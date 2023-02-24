import { Style } from "@interfaces/style.interface"
import HttpRequest from "@services/http-request"
import { ServiceResponse } from "@services/response"
import { getToken } from "public/common/helpers/auth.helper"

const ALL_STYLES_ENDPOINT = "styles"

export default class StyleService extends HttpRequest {
  async getStyles() {
    this.useToken(getToken())

    this.configRequest({
      endpoint: ALL_STYLES_ENDPOINT,
    })

    const response = await this.get<Style[]>()
    return new ServiceResponse(response.data)
  }
}
