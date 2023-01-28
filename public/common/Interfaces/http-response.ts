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
  code: string
  message: string
}
