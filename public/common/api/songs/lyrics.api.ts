import LyricsService from "@services/lyrics/lyrics.service"

const service = new LyricsService()

export const getLyrics = async (id: number) => {
  const response = await service.getLyrics(id)
  return response.data
}
