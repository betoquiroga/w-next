"use client"
import MainMenu from "@components/Navigation/MainMenu"
import { ColumnProvider } from "@context/ColumnContext"

export default function SongsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ColumnProvider>
      <MainMenu />
      <main>{children}</main>
    </ColumnProvider>
  )
}
