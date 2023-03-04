import { Version } from "@interfaces/version.interface"
import BooksVersionButton from "./BooksVersionButton"

const BooksVersions = () => {
  const versions: Version[] = [
    { title: "Nueva Biblia de las Américas", abbreviation: "NBLA" },
    { title: "Reina Valera 1960", abbreviation: "RVR1960" },
    { title: "Nueva Traducción Viviente", abbreviation: "NTV" },
  ]

  return (
    <div className="songs-search mb-1 flex gap-4">
      {versions.map((v) => (
        <BooksVersionButton key={v.abbreviation} versionData={v} />
      ))}
    </div>
  )
}

export default BooksVersions
