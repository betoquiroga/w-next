import {
  Bible,
  Config,
  Photo,
  Profile,
  Song,
} from "../../../../common/Icons/index"

const LyricsOptions = () => {
  return (
    <div className="pb-4 flex justify-between w-full">
      <span>Live edit</span>
      <div className="grid-cols-5 grid gap-4 self-center">
        <Song />
        <Bible />
        <Photo />
        <Config />
        <Profile />
      </div>
    </div>
  )
}

export default LyricsOptions
