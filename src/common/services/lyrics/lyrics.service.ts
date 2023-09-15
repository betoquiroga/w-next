import { Lyric, LyricBase } from "src/common/interfaces/lyrics.interface"
import HttpRequest from "src/common/services/http-request"
import { ServiceResponse } from "src/common/services/response"
import { getToken } from "src/common/helpers/auth.helper"

const LYRICS_ENDPOINT = "lyrics"

export default class LyricsService extends HttpRequest {
  async createLyric(newLyricData: LyricBase) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: LYRICS_ENDPOINT,
    })

    const response = await this.post<LyricBase>(newLyricData)
    return new ServiceResponse(response.data)
  }

  async getLyrics(id: number) {
    this.useToken(getToken())
    this.configRequest({
      endpoint: `${LYRICS_ENDPOINT}/song/${id}`,
    })

    const response = await this.get<Lyric[]>()
    return new ServiceResponse(response.data)
  }

  async getActive() {
    this.useToken(getToken())
    this.configRequest({
      endpoint: `${LYRICS_ENDPOINT}/active`,
    })

    const response = await this.get<Lyric>()
    return new ServiceResponse(response.data)
  }

  async updateLyric(id: number, updatedData: Partial<Lyric>) {
    if (id > 0) {
      this.useToken(getToken())
      this.configRequest({
        endpoint: `${LYRICS_ENDPOINT}/${id}`,
      })
      const response = await this.patch<Lyric>(updatedData)
      return new ServiceResponse(response.data)
    }
  }

  async deleteLyricById(id: number) {
    if (id > 0) {
      this.useToken(getToken())
      this.configRequest({
        endpoint: `${LYRICS_ENDPOINT}/song/${id}`,
      })
      const response = await this.delete<Lyric>()
      return new ServiceResponse(response.data)
    }
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
