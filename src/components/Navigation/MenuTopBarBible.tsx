"use client"
import { ColumnContext } from "@context/ColumnContext"
import { useContext } from "react"
import Books from "@icons/menuResponsive/bible/books"
import Chapters from "@icons/menuResponsive/bible/chapters"
import Verses from "@icons/menuResponsive/bible/verses"
import Preview from "@icons/menuResponsive/bible/preview"

const MenuTopBarBible = () => {
  const { setActiveColumn } = useContext(ColumnContext)
  return (
    <div className="w-full flex justify-between justify-center">
      <Books setActiveColumn={setActiveColumn} />
      <Chapters setActiveColumn={setActiveColumn} />
      <Verses setActiveColumn={setActiveColumn} />
      <Preview setActiveColumn={setActiveColumn} />
    </div>
  )
}

export default MenuTopBarBible
