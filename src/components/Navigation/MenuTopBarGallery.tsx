"use client"
import { ColumnContext } from "@context/ColumnContext"
import { useContext } from "react"
import Styles from "@icons/menuResponsive/gallery/styles"
import Preview from "@icons/menuResponsive/gallery/preview"

const MenuTopBarGallery = () => {
  const { setActiveColumn } = useContext(ColumnContext)
  return (
    <div className="w-full flex justify-between justify-center">
      <Styles setActiveColumn={setActiveColumn} />
      <Preview setActiveColumn={setActiveColumn} />
    </div>
  )
}

export default MenuTopBarGallery
