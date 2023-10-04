import { Option } from "@interfaces/option.interface"
import OptionsService from "@services/options/options.service"

const service = new OptionsService()

export const getOptionById = async (id: number) => {
  const response = await service.getOptionById(id)
  return response.data
}

export const getActive = async () => {
  const response = await service.getActive()
  return response.data
}

export const setActive = async (id: number) => {
  const response = await service.setActive(id)
  return response.data
}

export const createOption = async (newOptionData: Option) => {
  const response = await service.createOption(newOptionData)
  return response.data
}

export const updateOption = async (
  id: number,
  updatedData: Partial<Option>
) => {
  const response = await service.updateOption(id, updatedData)
  return response.data
}

export const deleteOption = async (id: number) => {
  const response = await service.deleteOption(id)
  return response.data
}
