import { BaseApi } from '~/api/BaseApi'

class SliderApi extends BaseApi {
  getMainSlider () {
    return this.ctx.$axios.$get(`api/v1/public/${this.apiUrl}/main`)
  }
}
export { SliderApi }
