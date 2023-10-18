"use client"

import { useRef } from "react"
import classNames from "classnames"
import Wallpaper from "./components/Wallpaper"
import FullScreenButton from "./components/FullScreenButton"
import BibleVerse from "./components/BibleVerse"
import SongContent from "./components/SongContent"
import CoverContent from "./components/CoverContent"
import BibleContent from "./components/BibleContent"
import { useHome } from "../../common/hooks/useHome"

const HomeView = ({ width }: HomeViewProps) => {
  const preview = useRef<HTMLParagraphElement>(null)
  const { content, styleData, bibleVerse, effectsWs, black } = useHome()
  return (
    <div
      ref={preview}
      className={classNames("prueba", {
        "landscape:pt-24 portrait:pt-12": bibleVerse?.content.length > 1,
      })}
      style={{ transform: `scale(${width || 1})` }}
    >
      {effectsWs.particles && <div className="snow" />}
      {bibleVerse?.content.length > 1 && <BibleVerse verse={bibleVerse} />}
      {!black && <Wallpaper style={styleData} effects={effectsWs} />}
      {!black && content.type === "lyric" && <SongContent data={content} />}
      {!black && content.type === "bible" && <BibleContent data={content} />}
      {!black && content.type === "songCover" && <CoverContent data={content} />}
      <FullScreenButton />
    </div>
  )
}

export default HomeView

type HomeViewProps = {
  width?: number
}
