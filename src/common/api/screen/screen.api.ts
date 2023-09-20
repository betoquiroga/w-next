import { ScreenBase } from "@interfaces/screen.interface"
import ScreenService from "@services/screen/screen.service"

const service = new ScreenService()

export const getScreen = async () => {
  const response = await service.getScreens()
  return response.data
}

export const getScreenById = async (id: number) => {
  const response = await service.getScreenById(id)
  return response.data
}

export const getScreenActive = async () => {
  const response = await service.getScreenActive()
  return response.data
}

export const createScreen = async (newStyleData: ScreenBase) => {
  const response = await service.createScreen(newStyleData)
  return response.data
}

export const updateScreen = async (
  id: number,
  updatedScreenData: Partial<ScreenBase>
) => {
  const response = await service.updateScreen(id, updatedScreenData)
  return response.data
}

export const setActiveStyle = async (id: number) => {
  const response = await service.setActive(id)
  return response.data
}

export const deleteScreen = async (id: number) => {
  const response = await service.deleteScreen(id)
  return response.data
}
