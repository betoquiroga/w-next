import { Lyric } from "@interfaces/lyrics.interface"
import { GenericResponse } from "@interfaces/response.interface"
import HttpRequest from "@services/http-request"
import { ServiceResponse } from "@services/response"

const ALL_SONGS_ENDPOINT = "lyrics/1"

export default class LyricsService extends HttpRequest {
  async getLyrics() {
    this.configRequest({
      endpoint: ALL_SONGS_ENDPOINT,
    })

    const response = await this.get<GenericResponse<Lyric>>()
    return new ServiceResponse(response.data.data)
  }
}
