import { Book } from "src/common/interfaces/book.interface"
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
  data: Book[]
}

export default BooksList
