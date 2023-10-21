import { RegisterPayload } from "src/common/interfaces/auth-service.interface"
import AuthenticationService from "src/common/services/user/auth.service"
import { REFRESH_NAME, TOKEN_NAME } from "src/common/constants/auth"
import { getToken } from "src/common/helpers/auth.helper"
import { HttpStatusCode } from "src/common/helpers/response-status-code.helper"

const usersService = new AuthenticationService()

export const isAuthenticated = async () => {
  const jwt = getToken()
  const response = await usersService.isAuthenticated(jwt)

  if (response.status === HttpStatusCode.UNAUTHORIZED) return false
  return response.status === HttpStatusCode.OK
}

export const logout = () => localStorage.removeItem(TOKEN_NAME)

export const login = (token: string) => localStorage.setItem(TOKEN_NAME, token)
export const saveRefreshToken = (token: string) =>
  localStorage.setItem(REFRESH_NAME, token)

export const authenticate = async (username: string, password: string) => {
  const response = await usersService.authenticate(username, password)
  const jwt = response.data?.token
  const refreshJwt = response.data?.refresh

  if (!jwt) {
    logout()
    throw new Error("Something went wrong...")
  }

  login(`Bearer ${jwt}`)
  saveRefreshToken(refreshJwt)
  usersService.useToken(jwt)

  return response
}

export const registration = async (payload: RegisterPayload) => {
  const response = await usersService.register(payload)
  const jwt = response.data?.token

  if (!jwt) {
    logout()
    throw new Error("Something went wrong...")
  }

  login(`Bearer ${jwt}`)
  usersService.useToken(jwt)

  return response
}

export const refreshToken = async (token: string) => {
  const response = usersService.refreshToken({ token })
  return response
}
