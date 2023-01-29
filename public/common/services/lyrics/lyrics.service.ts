import { Lyric } from "@interfaces/lyrics.interface"
import { GenericResponse } from "@interfaces/response.interface"
import HttpRequest from "@services/http-request"
import { ServiceResponse } from "@services/response"

const ALL_SONGS_ENDPOINT = "lyrics"

export default class LyricsService extends HttpRequest {
  async getLyrics(id: number) {
    this.configRequest({
      endpoint: `${ALL_SONGS_ENDPOINT}/${id}`,
    })

    const response = await this.get<GenericResponse<Lyric>>()
    return new ServiceResponse(response.data.data)
  }
}
