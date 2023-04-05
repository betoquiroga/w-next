"use client"
import BibleView from "@modules/Bible/BibleView"
import { BooksProvider } from "src/common/context/BookContext"
import { ChapterProvider } from "src/common/context/ChapterContext"

export default function Songs() {
  return (
    <BooksProvider>
      <ChapterProvider>
        <BibleView />
      </ChapterProvider>
    </BooksProvider>
  )
}
