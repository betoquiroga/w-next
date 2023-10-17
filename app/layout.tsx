"use client"
import "./globals.css"
import Providers from "./providers"
import { StyleProvider } from "src/common/context/StyleContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <StyleProvider>{children}</StyleProvider>
        </Providers>
      </body>
    </html>
  )
}
