import { Style, StyleBase } from "src/common/interfaces/style.interface"
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

  async getStyleById(id: number) {
    this.useToken(getToken())

    this.configRequest({
      endpoint: `${ALL_STYLES_ENDPOINT}/${id}`,
    })
    const response = await this.get<Partial<Style>>()
    return new ServiceResponse(response.data)
  }

  async createStyle(newStyleData: StyleBase) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: ALL_STYLES_ENDPOINT,
    })
    const response = await this.post<Style>(newStyleData)
    return new ServiceResponse(response.data)
  }

  async updateStyle(id: number, updatedStyleData: StyleBase) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: `styles/${id}`,
    })
    const response = await this.patch<StyleBase>(updatedStyleData)
    return new ServiceResponse(response.data)
  }

  async deleteStyle(id: number) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: `styles/${id}`,
    })
    const response = await this.delete<Style>()
    return new ServiceResponse(response.data)
  }
}
