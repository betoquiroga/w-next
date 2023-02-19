import { Song } from "@interfaces/song.interface"
import HttpRequest from "@services/http-request"
import { ServiceResponse } from "@services/response"
import { getToken } from "public/common/helpers/auth.helper"

const ALL_SONGS_ENDPOINT = "songs"

export default class SongsService extends HttpRequest {
  async getSongs() {
    this.configRequest({
      endpoint: ALL_SONGS_ENDPOINT,
    })
    this.useToken(getToken())

    const response = await this.get<Song[]>()
    return new ServiceResponse(response.data)
  }
}
