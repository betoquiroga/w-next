import { Song } from "@interfaces/song.interface"
import HttpRequest from "@services/http-request"
import { ServiceResponse } from "@services/response"

const ALL_SONGS_ENDPOINT = "songs"

export default class SongsService extends HttpRequest {
  async getSongs() {
    this.configRequest({
      endpoint: ALL_SONGS_ENDPOINT,
    })

    const response = await this.get<Song[]>()
    return new ServiceResponse(response.data)
  }
}
