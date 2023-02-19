import {
  AuthenticateResponse,
  IsAuthenticatedResponse,
  RegisterPayload,
  RegisterResponse,
} from "@interfaces/auth-service.interface"
import HttpRequest from "@services/http-request"
import { AxiosResponse } from "axios"

const VALIDATE_TOKEN_ENDPOINT = "validate-tokens"
const AUTHENTICATE_ENDPOINT = "users/login"
const REGISTER_ENDPOINT = "users"

export default class AuthenticationService extends HttpRequest {
  public authenticate(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthenticateResponse>> {
    this.configRequest({
      endpoint: AUTHENTICATE_ENDPOINT,
    })

    return this.post({ username, password })
  }

  public register(
    payload: RegisterPayload
  ): Promise<AxiosResponse<RegisterResponse>> {
    this.configRequest({
      endpoint: REGISTER_ENDPOINT,
    })
    return this.post(payload)
  }

  async isAuthenticated(
    jwt?: string
  ): Promise<AxiosResponse<IsAuthenticatedResponse>> {
    if (jwt) {
      this.useToken(jwt)
    }

    this.configRequest({
      endpoint: VALIDATE_TOKEN_ENDPOINT,
    })

    return this.get()
  }
}
