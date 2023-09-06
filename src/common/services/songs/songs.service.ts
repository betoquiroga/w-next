import { SongCreate } from "src/common/interfaces/song.interface"
import HttpRequest from "src/common/services/http-request"
import { ServiceResponse } from "src/common/services/response"
import { getToken } from "src/common/helpers/auth.helper"

const SONGS_ENDPOINT = "songs"

export default class SongsService extends HttpRequest {
  async getSongs() {
    this.useToken(getToken())

    this.configRequest({
      endpoint: SONGS_ENDPOINT,
    })

    const response = await this.get<SongCreate[]>()
    return new ServiceResponse(response.data)
  }

  async createSongs(newSongData: SongCreate) {
    this.useToken(getToken())

    this.configRequest({
      endpoint: SONGS_ENDPOINT,
    })

    const response = await this.post<SongCreate>(newSongData)
    return new ServiceResponse(response.data)
  }

  async updateSong(songId: number, updatedData: Partial<SongCreate>) {
    this.useToken(getToken())

    this.configRequest({
      endpoint: `${SONGS_ENDPOINT}/${songId}`,
    })

    const response = await this.patch<Partial<SongCreate>>(updatedData)
    return new ServiceResponse(response.data)
  }

  async deleteSong(songId: number) {
    this.useToken(getToken())

    this.configRequest({
      endpoint: `${SONGS_ENDPOINT}/${songId}`,
    })

    const response = await this.delete()
    return new ServiceResponse(response.data)
  }

  async setActive(id: number) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: `${SONGS_ENDPOINT}/active/${id}`,
    })

    const response = await this.patch<SongCreate>({ active: true })
    return new ServiceResponse(response.data)
  }
}
