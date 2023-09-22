import { SongsContext } from "src/common/context/SongsContext"
import { Tab } from "@headlessui/react"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import SongList from "./SongsList"
import SongsOptions from "./SongsOptions"
import SongsSearch from "./SongsSearch"
import { Song } from "@interfaces/song.interface"
import { orderSongs } from "@modules/Songs/helper/orderSongs"
import { SongsOrderOptions } from "./SongsOrderOptions"

const SongsPanel = () => {
  const { data, isLoading, isError } = useContext(SongsContext)
  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    const option = localStorage.getItem("song-order")
    if (option && data) {
      const optionOrder =
        SongsOrderOptions[option] || SongsOrderOptions["previous"]

      setSongs(orderSongs(optionOrder, data))
    } else {
      setSongs(data as Song[])
    }
  }, [data])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
    if (value === "") {
      setSongs(data as Song[])
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

  if (isLoading) return <Tab.Panel>Cargando...</Tab.Panel>
  if (isError) return <Tab.Panel>Error...</Tab.Panel>

  return (
    <Tab.Panel>
      <SongsSearch onSearch={handleSearch} />
      <SongsOptions data={songs} setSongs={setSongs} />
      <SongList data={songs} />
    </Tab.Panel>
  )
}

export default SongsPanel
