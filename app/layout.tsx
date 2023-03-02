"use client"
import "./globals.css"
import Providers from "./providers"
import { StyleProvider } from "src/common/context/StyleContext"
import { BooksProvider } from "src/common/context/BookContext"
import { SongProvider } from "src/common/context/SongContext"
import { SongsProvider } from "src/common/context/SongsContext"
import { ChapterProvider } from "src/common/context/ChapterContext"

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
          <BooksProvider>
            <ChapterProvider>
              <SongsProvider>
                <SongProvider>
                  <StyleProvider>{children}</StyleProvider>
                </SongProvider>
              </SongsProvider>
            </ChapterProvider>
          </BooksProvider>
        </Providers>
      </body>
    </html>
  )
}
