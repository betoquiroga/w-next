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
      <div className="px-4 bg-white text:black lg:hidden w-full flex py-1 transition bg-ww-content">
        <nav className="flex justify-between items-center w-screen h-[4rem]">
          <div className="flex items-center cursor-pointer">
            <div className="w-full flex justify-between justify-center">
              <MenuTopBar>
                <MenuTopBarSong />
              </MenuTopBar>
            </div>
          </div>
        </nav>
      </div>
      <main>{children}</main>
    </ColumnProvider>
  )
}
