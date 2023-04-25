import { Lyric } from "@interfaces/lyrics.interface"
import LyricsService from "src/common/services/lyrics/lyrics.service"

const service = new LyricsService()

export const getLyrics = async (id: number): Promise<Lyric[]> => {
  if (id > 0) {
    const response = await service.getLyrics(id)
    return response.data
  }
  return []
}
