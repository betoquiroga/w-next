import MainMenu from "@components/Navigation/MainMenu"

export default function BibleLayout({
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
