"use client"
import MainMenu from "@components/Navigation/MainMenu"
import MenuTopBar from "@components/Navigation/MenuTopBar"
import MenuTopBarGallery from "@components/Navigation/MenuTopBarGallery"
import { ColumnProvider } from "@context/ColumnContext"

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ColumnProvider>
      <MainMenu />
      <MenuTopBar>
        <MenuTopBarGallery />
      </MenuTopBar>
      <main>{children}</main>
    </ColumnProvider>
  )
}
