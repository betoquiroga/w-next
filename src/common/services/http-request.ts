import { HttpRequestParam } from "src/common/interfaces/http-request"
import axios, { AxiosResponse } from "axios"
import { WW_API_DOMAIN } from "../constants/domains"

export default class HttpRequest implements HttpRequestParam {
  constructor(
    public http = "https://",
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
    return axios.get(this.urlBuilder(), {
      headers: this.headers,
    })
  }

  protected post<T>(data: unknown): Promise<AxiosResponse<T>> {
    return axios.post(this.urlBuilder(), data, {
      headers: this.headers,
    })
  }

  protected patch<T>(data: unknown): Promise<AxiosResponse<T>> {
    return axios.patch(this.urlBuilder(), data, {
      headers: this.headers,
    })
  }

  protected put<T>(data: unknown): Promise<AxiosResponse<T>> {
    return axios.put(this.urlBuilder(), data, {
      headers: this.headers,
    })
  }

  protected delete<T>(): Promise<AxiosResponse<T>> {
    return axios.delete(this.urlBuilder(), {
      headers: this.headers,
    })
  }
}
