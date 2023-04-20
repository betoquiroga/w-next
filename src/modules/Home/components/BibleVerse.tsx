import { Emit } from "@interfaces/emit.interface"

const BibleVerse = ({ verse }: BibleVerseProps) => {
  return (
    <div className="verse fixed z-50 top-0 text-center w-full pt-6">
      {verse.content as string}
    </div>
  )
}

export default BibleVerse

type BibleVerseProps = {
  verse: Emit
}
