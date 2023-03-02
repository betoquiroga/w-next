"use client"
import "./globals.css"
import Providers from "./providers"
import { StyleProvider } from "@context/StyleContext"
import { BooksProvider } from "@context/BookContext"
import { SongProvider } from "@context/SongContext"
import { SongsProvider } from "@context/SongsContext"
import { ChapterProvider } from "@context/ChapterContext"

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
