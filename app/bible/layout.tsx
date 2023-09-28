"use client"
import MainMenu from "@components/Navigation/MainMenu"
import MenuTopBar from "@components/Navigation/MenuTopBar"
import MenuTopBarBible from "@components/Navigation/MenuTopBarBible"
import { ColumnProvider } from "@context/ColumnContext"

export default function BibleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ColumnProvider>
      <MainMenu />
      <MenuTopBar>
        <MenuTopBarBible />
      </MenuTopBar>
      <main>{children}</main>
    </ColumnProvider>
  )
}
