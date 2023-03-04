import { BookContext } from "@context/BookContext"
import { ChapterContext } from "@context/ChapterContext"
import { Chapter } from "@interfaces/chapter.interface"
import { Version } from "@interfaces/version.interface"
import classNames from "classnames"
import { useContext } from "react"

const BooksVersionButton = ({ versionData }: { versionData: Version }) => {
  const { version, setVersion } = useContext(BookContext)
  const { setChapter, setVerses } = useContext(ChapterContext)

  const handleClick = async () => {
    setVersion(versionData)
    setChapter({} as Chapter)
    setVerses([])
  }

  return (
    <button
      onClick={handleClick}
      className={classNames("version", {
        "bg-ww-green-700 hover:bg-ww-green-700":
          version.abbreviation === versionData.abbreviation,
        "bg-ww-alt hover:bg-ww-green-700":
          version.abbreviation !== versionData.abbreviation,
      })}
    >
      {versionData.abbreviation}
    </button>
  )
}

export default BooksVersionButton
