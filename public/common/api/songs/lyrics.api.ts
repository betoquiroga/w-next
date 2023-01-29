import LyricsService from "@services/lyrics/lyrics.service"

const service = new LyricsService()

export const getLyrics = async () => {
  const response = await service.getLyrics()
  return response.data
}
