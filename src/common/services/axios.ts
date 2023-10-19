// utils/axios.js
import axios from "axios"

const axiosWW = axios.create({
  timeout: 5000,
})

axiosWW.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("beto", error)
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      /*
      const refreshToken = getRefreshToken() // Implementa esta función para obtener el refresh token
      const newAccessToken = await refreshAccessToken(refreshToken) // Implementa esta función para obtener un nuevo access token
      setAccessToken(newAccessToken) // Implementa esta función para almacenar el nuevo access token
      originalRequest.headers["Authorization"] = "Bearer " + newAccessToken
      */
      return axiosWW(originalRequest)
    }
    return Promise.reject(error)
  }
)

export default axiosWW
