import { Book } from "@interfaces/book.interface"
import BooksItem from "./BooksItem"

const BooksList = ({ data }: BooksListProps) => {
  return (
    <div className="books">
      {data.map((i: Book) => (
        <BooksItem key={i.order} bookData={i} />
      ))}
    </div>
  )
}

type BooksListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

export default BooksList
