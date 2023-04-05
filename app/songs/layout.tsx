import MainMenu from "@components/Navigation/MainMenu"

export default function SongsLayout({
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
