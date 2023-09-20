export interface ScreenBase {
  type: string
  content: string
  active: boolean
  background: string
  verse: string
}

export interface Screen extends ScreenBase {
  id: number
}
