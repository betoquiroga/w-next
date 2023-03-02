import { Verse } from "src/common/interfaces/verses.interface"
import classNames from "classnames"

const VersesItem = ({ verseData }: VersesItemProps) => {
  const handleClick = async () => {
    console.log("")
  }

  const { verse, text } = verseData
  return (
    <div
      onClick={handleClick}
      className={classNames(
        "book p-2 border-t-2 border-t-ww-alt hover:bg-ww-alt cursor-pointer flex items-center justify-items-stretch",
        { "bg-ww-green-800 hover:bg-ww-green-800": true }
      )}
    >
      <div
        className={classNames(
          "flex justify-center self-center h-full min-w-[6rem] text-3xl p-4",
          {
            "bg-ww-green-700": false,
            "bg-ww-scroll": true,
          }
        )}
      >
        <span>{verse}</span>
      </div>
      <div className="pl-4">
        <span>{text}</span>
      </div>
    </div>
  )
}

type VersesItemProps = {
  verseData: Verse
}

export default VersesItem
