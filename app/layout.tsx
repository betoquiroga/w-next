"use client"
import { SectionProvider } from "@context/SectionContext"
import "./globals.css"
import Providers from "./providers"
import { StyleProvider } from "src/common/context/StyleContext"
import { VideoProvider } from "@context/VideoContext"

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
          <VideoProvider>
            <SectionProvider>
              <StyleProvider>{children}</StyleProvider>
            </SectionProvider>
          </VideoProvider>
        </Providers>
      </body>
    </html>
  )
}
