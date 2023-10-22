import { HttpRequestParam } from "src/common/interfaces/http-request"
import { AxiosResponse } from "axios"
import { WW_API_DOMAIN, WW_PROTOCOL } from "../constants/domains"
import axiosWW from "./axios"

export default class HttpRequest implements HttpRequestParam {
  constructor(
    public http = `${WW_PROTOCOL}://`,
    public endpoint = "",
    public headers: Record<string, string> = {
      "Content-Type": "application/json",
    }
  ) {}

  protected configRequest(param: HttpRequestParam) {
    const { headers, endpoint } = param
    if (headers) this.headers = headers
    this.endpoint = endpoint
  }

  public useToken(token: string) {
    this.headers = {
      ...this.headers,
      ...(token && {
        Authorization: `Bearer ${token.replace("Bearer ", "")}`,
      }),
    }
  }

  protected urlBuilder() {
    return `${this.http}${WW_API_DOMAIN}/${this.endpoint}`
  }

  protected get<T>(): Promise<AxiosResponse<T>> {
    return axiosWW.get(this.urlBuilder(), {
      headers: this.headers,
    })
  }

  protected post<T>(data: unknown): Promise<AxiosResponse<T>> {
    return axiosWW.post(this.urlBuilder(), data, {
      headers: this.headers,
    })
  }

  protected patch<T>(data: unknown): Promise<AxiosResponse<T>> {
    return axiosWW.patch(this.urlBuilder(), data, {
      headers: this.headers,
    })
  }

  protected put<T>(data: unknown): Promise<AxiosResponse<T>> {
    return axiosWW.put(this.urlBuilder(), data, {
      headers: this.headers,
    })
  }

  protected delete<T>(): Promise<AxiosResponse<T>> {
    return axiosWW.delete(this.urlBuilder(), {
      headers: this.headers,
    })
  }
}
