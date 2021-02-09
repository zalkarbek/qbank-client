import { BaseApi } from '~/api/BaseApi'

class TvTabloApi extends BaseApi {
  getTvTabloTickerText () {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/index`)
  }

  saveTvTabloTickerText (data) {
    return this.ctx.$axios.$post(`api/v1/${this.apiUrl}/save`, data)
  }
}
export { TvTabloApi }
