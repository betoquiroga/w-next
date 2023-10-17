import { Option } from "@interfaces/option.interface"
import OptionsService from "@services/options/options.service"

const optionsService = new OptionsService()

export const getOptions = async () => {
  const response = await optionsService.getOptions()
  return response.data
}

export const getOptionById = async (id: number) => {
  const response = await optionsService.getOptionById(id)
  return response.data
}

export const getActive = async () => {
  const response = await optionsService.getActive()
  return response.data
}

export const setActive = async (id: number) => {
  const response = await optionsService.setActive(id)
  return response.data
}

export const createOption = async (newOptionData: Option) => {
  const response = await optionsService.createOption(newOptionData)
  return response.data
}

export const updateOption = async (
  id: number,
  updatedData: Partial<Option>
) => {
  const response = await optionsService.updateOption(id, updatedData)
  return response.data
}

export const deleteOption = async (id: number) => {
  const response = await optionsService.deleteOption(id)
  return response.data
}

export const deactivateOptions = async () => {
  const response = await optionsService.deactivateOptions()
  return response.data
}
