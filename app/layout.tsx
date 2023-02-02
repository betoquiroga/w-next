"use client"
import "./globals.css"
import Providers from "./providers"
import { StyleProvider } from "@context/StyleContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <StyleProvider>
          <Providers>{children}</Providers>
        </StyleProvider>
      </body>
    </html>
  )
}
