import LyricsItem from "./LyricsItem"

const LyricsList = () => {
  return (
    <div className="songs border-t-2 border-t-ww-alt">
      <LyricsItem
        content={[
          "Tu voz me llama a las aguas",
          "Donde mis pies pueden fallar",
        ]}
      />
      <LyricsItem
        content={[
          "Y allí te encuentro",
          "en lo incierto",
          "Caminaré sobre el mar",
        ]}
      />
      <LyricsItem
        content={["Y a tu nombre clamaré", "En ti mis ojos fijaré"]}
      />
      <LyricsItem
        content={[
          "En tempestad",
          "descansaré en tu poder",
          "Pues tuyo soy",
          "Hasta el final",
        ]}
      />
      <LyricsItem
        content={["Tu gracia abunda en la tormenta", "Tu mano Dios me guiará"]}
      />
      <LyricsItem
        content={[
          "Cuando hay temor en mi camino",
          "Tú eres fiel y no cambiarás",
        ]}
      />
    </div>
  )
}

export default LyricsList
