import { Song } from "@interfaces/song.interface"
import {
  WW_ORDER_PREVIOUS,
  WW_ORDER_RECENT,
  WW_ORDER_TITLE,
} from "src/common/constants/order"

export const orderSongs = (option: string, arr: Song[]) => {
  let sortedData: Song[] = []
  sortedData = arr.sort((a, b) => a.id - b.id)

  if (option === WW_ORDER_PREVIOUS) {
    return [...sortedData]
  }

  if (option === WW_ORDER_RECENT) {
    return [...sortedData].reverse()
  }

  sortedData = [...arr].sort((a, b) =>
    option === WW_ORDER_TITLE
      ? a.title.localeCompare(b.title)
      : a.author.localeCompare(b.author)
  )
  return sortedData
}
