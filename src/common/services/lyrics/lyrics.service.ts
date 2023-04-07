import { Lyric } from "src/common/interfaces/lyrics.interface"
import HttpRequest from "src/common/services/http-request"
import { ServiceResponse } from "src/common/services/response"
import { getToken } from "src/common/helpers/auth.helper"

const LYRICS_ENDPOINT = "lyrics"

export default class LyricsService extends HttpRequest {
  async getLyrics(id: number) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: `${LYRICS_ENDPOINT}/song/${id}`,
    })

    const response = await this.get<Lyric[]>()
    return new ServiceResponse(response.data)
  }

  async setActive(id: number) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: `${LYRICS_ENDPOINT}/active/${id}`,
    })
    const response = await this.patch<Lyric>({ active: true })
    return new ServiceResponse(response.data)
  }
}
