import { SongBase } from "@interfaces/song.interface"
import SongsService from "src/common/services/songs/songs.service"

const service = new SongsService()

export const getSongs = async () => {
  const response = await service.getSongs()
  return response.data
}

export const getSongById = async (id: number) => {
  const response = await service.getSongById(id)
  return response.data
}

export const getActive = async () => {
  const response = await service.getActive()
  return response.data
}

export const createSongs = async (newSongData: SongBase) => {
  const response = await service.createSongs(newSongData)
  return response.data
}

export const updateSong = async (
  songId: number,
  updatedData: Partial<SongBase>
) => {
  const response = await service.updateSong(songId, updatedData)
  return response.data
}

export const deleteSong = async (songId: number) => {
  const response = await service.deleteSong(songId)
  return response.data
}

export const setActiveSong = async (id: number) => {
  const response = await service.setActive(id)
  return response.data
}

export const desactivateAllSongs = async () => {
  const response = await service.desactivateAllSongs()
  return response.data
}
