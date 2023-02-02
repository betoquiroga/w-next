"use client"
import { Manrope } from "@next/font/google"
import "./globals.css"
import Providers from "./providers"
import { StyleProvider } from "@context/StyleContext"

const manrope = Manrope({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className={manrope.className}>
        <StyleProvider>
          <Providers>{children}</Providers>
        </StyleProvider>
      </body>
    </html>
  )
}
