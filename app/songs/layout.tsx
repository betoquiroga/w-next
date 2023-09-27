"use client"
import MainMenu from "@components/Navigation/MainMenu"
import MenuTopBar from "@components/Navigation/MenuTopBar"
import MenuTopBarSong from "@components/Navigation/MenuTopBarSong"
import { ColumnProvider } from "@context/ColumnContext"

export default function SongsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ColumnProvider>
      <MainMenu />
      <MenuTopBar>
        <MenuTopBarSong />
      </MenuTopBar>
      <main>{children}</main>
    </ColumnProvider>
  )
}
