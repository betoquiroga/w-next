import {
  WW_ORDER_AUTHOR,
  WW_ORDER_PREVIOUS,
  WW_ORDER_RECENT,
  WW_ORDER_TITLE,
} from "src/common/constants/order"

export const SongsOrderOptions: Record<string, string> = {
  previous: WW_ORDER_PREVIOUS,
  recent: WW_ORDER_RECENT,
  title: WW_ORDER_TITLE,
  author: WW_ORDER_AUTHOR,
}
