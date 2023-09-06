export interface StyleBase {
  title: string
  type: string
  details: string
  image: string
}

export interface Style extends StyleBase {
  id: number
}
