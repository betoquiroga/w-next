export interface GenericResponse<T> {
  data: T
  messages: MessageResponse[] | null
  errors: ErrorResponse | null
}

export interface MessageResponse {
  type: string
  code: string
  message: string
  href: string
}

export interface ErrorResponse {
  name: string
  message: string
  stack?: string
  response: {
    config: {
      url: string
      method: string
    }
    data: { message: string; errors: { code: string; message: string }[] }
    status: number
    statusText: string
  }
}
