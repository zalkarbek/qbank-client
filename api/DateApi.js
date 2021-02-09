import { BaseApi } from '~/api/BaseApi'

class DateApi extends BaseApi {
  getCurrentDate () {
    return this.ctx.$axios.$get(`api/v1/public/${this.apiUrl}/current`)
  }
}
export { DateApi }
