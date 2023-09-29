import HttpRequest from "src/common/services/http-request"
import { ServiceResponse } from "src/common/services/response"
import { getToken } from "src/common/helpers/auth.helper"
import { Option } from "@interfaces/option.interface"

const OPTIONS_ENDPOINT = "options"

export default class OptionsService extends HttpRequest {
  async getOptions() {
    this.useToken(getToken())

    this.configRequest({
      endpoint: OPTIONS_ENDPOINT,
    })

    const response = await this.get<Option[]>()
    return new ServiceResponse(response.data)
  }

  async getOptionById(id: number) {
    this.useToken(getToken())

    this.configRequest({
      endpoint: `${OPTIONS_ENDPOINT}/${id}`,
    })

    const response = await this.get<Partial<Option>>()
    return new ServiceResponse(response.data)
  }

  async getActive() {
    this.useToken(getToken())

    this.configRequest({
      endpoint: `${OPTIONS_ENDPOINT}/active`,
    })

    const response = await this.get<Option>()
    return new ServiceResponse(response.data)
  }

  async setActive(id: number) {
    this.useToken(getToken())

    this.configRequest({
      endpoint: `${OPTIONS_ENDPOINT}/active/${id}`,
    })

    const response = await this.patch<Option>({ active: true })
    return new ServiceResponse(response.data)
  }

  async createOption(newOptionData: Option) {
    this.useToken(getToken())

    this.configRequest({
      endpoint: OPTIONS_ENDPOINT,
    })

    const response = await this.post<Option>(newOptionData)
    return new ServiceResponse(response.data)
  }

  async updateOption(id: number, updatedData: Partial<Option>) {
    this.useToken(getToken())

    this.configRequest({
      endpoint: `${OPTIONS_ENDPOINT}/${id}`,
    })
    const response = await this.patch<Option>(updatedData)
    return new ServiceResponse(response.data)
  }

  async deleteOption(id: number) {
    this.useToken(getToken())

    this.configRequest({
      endpoint: `${OPTIONS_ENDPOINT}/${id}`,
    })

    const response = await this.delete<Option>()
    return new ServiceResponse(response.data)
  }
}
