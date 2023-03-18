import MainMenu from "@components/Navigation/MainMenu"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <MainMenu />
        <main>{children}</main>
      </body>
    </html>
  )
}
