import { Manrope } from "@next/font/google"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
