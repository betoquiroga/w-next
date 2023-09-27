import MainMenu from "@components/Navigation/MainMenu"
import MenuTopBar from "@components/Navigation/MenuTopBar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainMenu />
      <div className="px-4 bg-white text:black lg:hidden w-full flex py-1 transition bg-ww-content">
        <nav className="flex justify-between items-center w-screen h-[4rem]">
          <div className="flex items-center cursor-pointer">
            <div className="w-full flex justify-between justify-center">
              <MenuTopBar>{}</MenuTopBar>
            </div>
          </div>
        </nav>
      </div>
      <main>{children}</main>
    </>
  )
}
