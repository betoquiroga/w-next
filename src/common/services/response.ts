import { AxiosError } from "axios"

export class ServiceResponse<T> {
  data: T
  request: ServiceRequest

  constructor(data: T, request: ServiceRequest = null) {
    this.data = data
    this.request = request
  }
}

type ServiceRequest = AxiosError | null
