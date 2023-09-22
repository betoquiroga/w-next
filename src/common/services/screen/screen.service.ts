import HttpRequest from "src/common/services/http-request"
import { ServiceResponse } from "src/common/services/response"
import { getToken } from "src/common/helpers/auth.helper"
import { Screen, ScreenBase } from "@interfaces/screen.interface"

const ALL_SCREEN_ENDPOINT = "screen"

export default class ScreenService extends HttpRequest {
  async getScreens() {
    this.useToken(getToken())

    this.configRequest({
      endpoint: ALL_SCREEN_ENDPOINT,
    })
    const response = await this.get<Screen[]>()
    return new ServiceResponse(response.data)
  }

  async getScreenById(id: number) {
    this.useToken(getToken())

    this.configRequest({
      endpoint: `${ALL_SCREEN_ENDPOINT}/${id}`,
    })
    const response = await this.get<Partial<Screen>>()
    return new ServiceResponse(response.data)
  }

  async getScreenActive() {
    this.useToken(getToken())

    this.configRequest({
      endpoint: `${ALL_SCREEN_ENDPOINT}/active`,
    })
    const response = await this.get<Screen>()
    return new ServiceResponse(response.data)
  }

  async createScreen(newScreenData: ScreenBase) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: ALL_SCREEN_ENDPOINT,
    })
    const response = await this.post<Screen>(newScreenData)
    return new ServiceResponse(response.data)
  }

  async updateScreen(id: string, updatedScreenData: Partial<ScreenBase>) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: `${ALL_SCREEN_ENDPOINT}/${id}`,
    })
    const response = await this.patch<ScreenBase>(updatedScreenData)
    return new ServiceResponse(response.data)
  }

  async setActive(id: number) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: `${ALL_SCREEN_ENDPOINT}/active/${id}`,
    })

    const response = await this.patch<ScreenBase>({ active: true })
    return new ServiceResponse(response.data)
  }

  async deleteScreen(id: number) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: `${ALL_SCREEN_ENDPOINT}/${id}`,
    })
    const response = await this.delete<Screen>()
    return new ServiceResponse(response.data)
  }
}
