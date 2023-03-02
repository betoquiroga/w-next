import { Style } from "src/common/interfaces/style.interface"
import HttpRequest from "src/common/services/http-request"
import { ServiceResponse } from "src/common/services/response"
import { getToken } from "src/common/helpers/auth.helper"

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
