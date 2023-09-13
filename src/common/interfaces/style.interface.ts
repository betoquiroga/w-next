export interface StyleBase {
  title: string
  type: string
  details: string
  active: boolean
  image: string
}

export interface Style extends StyleBase {
  id: number
}
