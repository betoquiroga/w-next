import {
  Bible,
  Config,
  Photo,
  Profile,
  Song,
} from "../../../../common/Icons/index"

const SongsOptions = () => {
  return (
    <div className="pb-4 flex justify-between w-full">
      <div className="grid-cols-5 grid gap-4 self-center">
        <Song />
        <Bible />
        <Photo />
        <Config />
        <Profile />
      </div>
      <span>Ordenar por</span>
    </div>
  )
}

export default SongsOptions
