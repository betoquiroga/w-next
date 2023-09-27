"use client"
import { ColumnContext } from "@context/ColumnContext"
import Songs from "@icons/menuResponsive/song/songs"
import Lirycs from "@icons/menuResponsive/song/lirycs"
import Styles from "@icons/menuResponsive/song/styles"
import Preview from "@icons/menuResponsive/song/preview"
import { useContext } from "react"

const MenuTopBarSong = () => {
  const { setActiveColumn } = useContext(ColumnContext)
  return (
    <>
      <Songs setActiveColumn={setActiveColumn} />
      <Lirycs setActiveColumn={setActiveColumn} />
      <Styles setActiveColumn={setActiveColumn} />
      <Preview setActiveColumn={setActiveColumn} />
    </>
  )
}

export default MenuTopBarSong
