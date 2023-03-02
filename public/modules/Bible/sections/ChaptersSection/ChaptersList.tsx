import ChaptersItem from "./ChaptersItem"

const ChaptersList = ({ data }: ChaptersListProps) => {
  return (
    <div className="books grid grid-cols-5 gap-2 flex-wrap">
      {data.map((i: number) => (
        <ChaptersItem key={i} chapter={i} />
      ))}
    </div>
  )
}

type ChaptersListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

export default ChaptersList
