import { Song } from "src/common/interfaces/song.interface"
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

    const response = await this.get<Song[]>()
    return new ServiceResponse(response.data)
  }

  async setActive(id: number) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: `${SONGS_ENDPOINT}/active/${id}`,
    })

    const response = await this.patch<Song>({ active: true })
    return new ServiceResponse(response.data)
  }
}
