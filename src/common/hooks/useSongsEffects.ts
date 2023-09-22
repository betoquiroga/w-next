import { useState, useEffect, ChangeEvent } from "react"
import { orderSongs } from "@modules/Songs/helper/orderSongs"
import { Song } from "@interfaces/song.interface"
import { SongsOrderOptions } from "@modules/Songs/sections/SongsPanels/SongsOrderOptions"

const useSongsEffects = (
  data: Song[],
  isLoading: boolean,
  isError: boolean
) => {
  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    const option = localStorage.getItem("song-order")
    if (option && data) {
      const optionOrder =
        SongsOrderOptions[option] || SongsOrderOptions["previous"]
      setSongs(orderSongs(optionOrder, data))
    } else {
      setSongs(data)
    }
  }, [data])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
    if (value === "") {
      setSongs(data)
      return
    }

    if (data) {
      const newData = songs.filter(
        (b) =>
          b.title
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          b.author.toLowerCase().includes(value.toLowerCase())
      )

      setSongs(newData)
    }
  }

  return { songs, setSongs, handleSearch, isLoading, isError }
}

export default useSongsEffects
