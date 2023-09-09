import { Lyric, LyricBase } from "@interfaces/lyrics.interface"
import LyricsService from "src/common/services/lyrics/lyrics.service"

const service = new LyricsService()

export const createLyric = async (newLyricData: LyricBase) => {
  const response = await service.createLyric(newLyricData)
  return response.data
}

export const getLyrics = async (id: number): Promise<Lyric[]> => {
  if (id > 0) {
    const response = await service.getLyrics(id)
    return response.data
  }
  return []
}

export const deleteLyricById = async (id: number): Promise<void> => {
  if (id > 0) {
    await service.deleteLyricById(id)
  }
}
