import { Song } from "@interfaces/song.interface"
import HttpRequest from "@services/http-request"
import { ServiceResponse } from "@services/response"
import { getToken } from "public/common/helpers/auth.helper"

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
