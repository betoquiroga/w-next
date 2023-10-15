import useAnimation from "@hooks/useAnimation"
import { Effect } from "@interfaces/effect.interface"
import { Style } from "@interfaces/style.interface"
import Image from "next/image"

const Wallpaper = ({ style, effects }: WallpaperProps) => {
  const { animationClass, displayedData } = useAnimation(
    "fade",
    style.image,
    500
  )
  return (
    <div className={`wallpaper ${animationClass}`}>
      {style.type === "Video" && (
        <video
          id="video-player"
          autoPlay
          muted
          loop
          className="main-video"
          src={displayedData}
        />
      )}
      {style?.type?.includes("Imagen") && displayedData && (
        <Image
          src={displayedData}
          alt={""}
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
