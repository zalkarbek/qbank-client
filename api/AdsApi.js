import { BaseApi } from '~/api/BaseApi'

class AdsApi extends BaseApi {
  uploadFile (formData) {
    return this.ctx.$axios.$post(`api/v1/${this.apiUrl}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  getAds () {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/index`)
  }

  deleteAdsById (id) {
    return this.ctx.$axios.$delete(`api/v1/${this.apiUrl}/${id}`)
  }
}
export { AdsApi }
