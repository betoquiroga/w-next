import StyleService from "@services/styles/styles.service"

const service = new StyleService()

export const getStyles = async () => {
  const response = await service.getStyles()
  return response.data
}
