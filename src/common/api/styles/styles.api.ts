import StyleService from "src/common/services/styles/styles.service"

const service = new StyleService()

export const getStyles = async () => {
  const response = await service.getStyles()
  return response.data
}
