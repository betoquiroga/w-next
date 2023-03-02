import SongsService from "src/common/services/songs/songs.service"

const service = new SongsService()

export const getSongs = async () => {
  const response = await service.getSongs()
  return response.data
}
