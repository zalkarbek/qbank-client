import { BaseApi } from '~/api/BaseApi'

class PostApi extends BaseApi {
  setVisible (data = {}, config = {}) {
    return this.ctx.$axios.$post(`api/v1/${this.apiUrl}/${data.id}/published`, data, config)
  }

  getLastPosts () {
    return this.ctx.$axios.$get(`api/v1/public/${this.apiUrl}/last`)
  }

  getSliderPosts () {
    return this.ctx.$axios.$get(`api/v1/public/${this.apiUrl}/sliderPosts`)
  }

  getPostDateRange () {
    return this.ctx.$axios.$get(`api/v1/public/${this.apiUrl}/date_min_max`)
  }

  getPosts (data = {}, apiConfig = {}) {
    return this.ctx.$axios.$post(`api/v1/public/${this.apiUrl}`, data, {
      ...apiConfig
    })
  }
}
export { PostApi }
