import axios from "axios"
import { login } from "@helpers/auth.helper"
import { WW_API_DOMAIN, WW_PROTOCOL } from "../constants/domains"
import { REFRESH_NAME } from "../constants/auth"

const axiosWW = axios.create({
  timeout: 5000,
})

axiosWW.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const newToken = await axios.post(
          `${WW_PROTOCOL}://${WW_API_DOMAIN}/users/refresh`,
          {
            token: localStorage?.getItem(REFRESH_NAME)?.replace("Bearer ", ""),
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage?.getItem(REFRESH_NAME),
            },
          }
        )
        originalRequest.headers["Authorization"] =
          "Bearer " + newToken.data.token
        login(newToken.data.token)
      } catch (e) {
        window.location.href = "/login"
      }

      return axiosWW(originalRequest)
    }
    return Promise.reject(error)
  }
)

export default axiosWW
