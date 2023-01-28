import SongsService from "@services/songs/songs.service"

const service = new SongsService()

export const getSongs = async () => {
  const response = await service.getSongs()
  return response.data
}
