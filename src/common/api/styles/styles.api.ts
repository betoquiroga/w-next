import StyleService from "src/common/services/styles/styles.service"
import { Style, StyleBase } from "src/common/interfaces/style.interface"

const service = new StyleService()

export const getStyles = async () => {
  const response = await service.getStyles()
  return response.data
}

export const createStyle = async (newStyleData: StyleBase) => {
  const response = await service.createStyle(newStyleData)
  return response.data
}

export const updateStyle = async (id: number, updatedStyleData: Style) => {
  const response = await service.updateStyle(id, updatedStyleData)
  return response.data
}

export const deleteStyle = async (id: number) => {
  const response = await service.deleteStyle(id)
  return response.data
}
