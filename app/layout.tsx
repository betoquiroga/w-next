"use client"
import { SectionProvider } from "@context/SectionContext"
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
          <SectionProvider>
            <StyleProvider>{children}</StyleProvider>
          </SectionProvider>
        </Providers>
      </body>
    </html>
  )
}
