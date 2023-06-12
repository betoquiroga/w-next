import { Effect } from "@interfaces/effect.interface"
import { Style } from "@interfaces/style.interface"
import Image from "next/image"

const Wallpaper = ({ style, effects }: WallpaperProps) => {
  return (
    <div className="wallpaper">
      {style.type === "Video" && (
        <video
          id="video-player"
          autoPlay
          muted
          loop
          className="main-video"
          src={style.image}
        />
      )}
      {style.type.includes("Imagen") && (
        <Image
          src={style.image}
          alt={style.title}
          height={1080}
          width={1920}
          blurDataURL="/images/styles/logo.jpeg"
          placeholder="blur"
          className={`${effects.zoom ? "zoom" : ""}`}
        />
      )}
    </div>
  )
}

export default Wallpaper

type WallpaperProps = {
  style: Style
  effects: Effect
}
