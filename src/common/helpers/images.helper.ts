import { WW_API_DOMAIN } from "../constants/domains"

export const bigImage = (image: string): string => {
  return `https://${WW_API_DOMAIN}/uploads/styles/big/${image}`
}

export const smallImage = (image: string): string => {
  return `https://${WW_API_DOMAIN}/uploads/styles/small/${image}`
}
