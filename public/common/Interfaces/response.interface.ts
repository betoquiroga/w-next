export interface Response {
  messages: Message[]
  errors: null
}

export interface GenericResponse<T> {
  messages: Message[]
  errors: null
  data: T
}

export interface Message {
  type: string
  code: string
  message: string
  href: string
}
