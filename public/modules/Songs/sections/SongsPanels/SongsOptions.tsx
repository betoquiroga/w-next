import BibleIcon from "@icons/misc/bible"
import ConfigIcon from "@icons/misc/config"
import PhotoIcon from "@icons/misc/photo"
import ProfileIcon from "@icons/misc/profile"
import SongIcon from "@icons/misc/song"

const SongsOptions = () => {
  return (
    <div className="pb-4 flex justify-between w-full">
      <div className="grid-cols-5 grid gap-4 self-center">
        <SongIcon />
        <BibleIcon />
        <PhotoIcon />
        <ConfigIcon />
        <ProfileIcon />
      </div>
      <span>Ordenar por</span>
    </div>
  )
}

export default SongsOptions
