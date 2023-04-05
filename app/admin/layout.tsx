import MainMenu from "@components/Navigation/MainMenu"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainMenu />
      <main>{children}</main>
    </>
  )
}
