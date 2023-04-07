"use client"
import "./globals.css"
import Providers from "./providers"
import { EffectsProvider } from "src/common/context/EffectsContext"
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
          <EffectsProvider>
            <StyleProvider>{children}</StyleProvider>
          </EffectsProvider>
        </Providers>
      </body>
    </html>
  )
}
