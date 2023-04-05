import MainMenu from "@components/Navigation/MainMenu"

export default function GalleryLayout({
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
