import { Lyric } from "@interfaces/lyrics.interface"
import HttpRequest from "@services/http-request"
import { ServiceResponse } from "@services/response"

const ALL_LYRICS_ENDPOINT = "lyrics/song"

export default class LyricsService extends HttpRequest {
  async getLyrics(id: number) {
    this.configRequest({
      endpoint: `${ALL_LYRICS_ENDPOINT}/${id}`,
    })

    const response = await this.get<Lyric>()
    return new ServiceResponse(response.data)
  }
}
