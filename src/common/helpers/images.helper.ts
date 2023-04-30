import { WW_API_DOMAIN } from "../constants/domains"

export const bigImage = (image: string): string => {
  return `http://${WW_API_DOMAIN}/uploads/big/${image}`
}

export const smallImage = (image: string): string => {
  return `http://${WW_API_DOMAIN}/uploads/small/${image}`
}
