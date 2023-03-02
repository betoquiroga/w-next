import { TOKEN_NAME } from "../constants/auth"

export const isAuthenticated = () => !!localStorage.getItem(TOKEN_NAME)
export const getToken = () => localStorage.getItem(TOKEN_NAME) || ""
export const login = (token: string) => localStorage.setItem(TOKEN_NAME, token)

export const logout = () => localStorage.removeItem(TOKEN_NAME)

export const removeOldToken = () => {
  const token = localStorage.getItem(TOKEN_NAME)
  if (token) localStorage.removeItem(TOKEN_NAME)
}
