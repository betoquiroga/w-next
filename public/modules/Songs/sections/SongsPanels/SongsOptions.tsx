import { Bible, Config, Photo, Profile, Song } from "@icons/index"

const SongsOptions = () => {
  return (
    <div className="border-b-2 border-b-ww-alt pb-4 flex justify-between w-full">
      <div className="grid-cols-5 grid gap-4 grid-flow-col self-center">
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
