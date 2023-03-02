import { Verse } from "src/common/interfaces/verses.interface"
import VersesItem from "./VersesItem"

const VersesList = ({ data }: VersesListProps) => {
  return (
    <div className="Verses">
      {data.map((i: Verse) => (
        <VersesItem key={i.verse} verseData={i} />
      ))}
    </div>
  )
}

type VersesListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

export default VersesList
