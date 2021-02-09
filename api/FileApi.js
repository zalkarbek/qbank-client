import { BaseApi } from '~/api/BaseApi'

class FileApi extends BaseApi {
  getSortByCreateDate (rate = 'asc') {
    return {
      column: 'created_at',
      rate
    }
  }

  uploadFile (formData) {
    return this.ctx.$axios.$post(`api/v1/${this.apiUrl}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  getImages () {
    return this.ctx.$axios.$post(`api/v1/${this.apiUrl}/images`)
  }

  getLastCreatedImages ({ data = {}, config = {} }) {
    const orders = [
      this.getSortByCreateDate('desc')
    ]
    data.orders = [
      ...orders,
      ...((data && data.orders && Array.isArray(data.orders)) || [])
    ]
    return this.ctx.$axios.$post(`api/v1/${this.apiUrl}/images`, {
      ...data
    }, config)
  }
}
export { FileApi }
