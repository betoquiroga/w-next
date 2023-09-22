import { Song } from "@interfaces/song.interface"

export const orderSongs = (option: number, arr: Song[]) => {
  let sortedData: Song[] = []
  sortedData = arr.sort((a, b) => a.id - b.id)

  if (option === 3) {
    return [...sortedData].reverse()
  }

  if (option === 4) {
    return [...sortedData]
  }

  sortedData = [...arr].sort((a, b) =>
    option === 1
      ? a.author.localeCompare(b.author)
      : a.title.localeCompare(b.title)
  )
  return sortedData
}
