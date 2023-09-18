import { WW_API_DOMAIN, WW_PROTOCOL } from "../constants/domains"

export const bigImage = (image: string): string => {
  return `${WW_PROTOCOL}://${WW_API_DOMAIN}/uploads/styles/big/${image}`
}

export const smallImage = (image: string): string => {
  return `${WW_PROTOCOL}://${WW_API_DOMAIN}/uploads/styles/small/${image}`
}
