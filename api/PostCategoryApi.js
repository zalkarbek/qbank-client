import { BaseApi } from '~/api/BaseApi'

class PostCategoryApi extends BaseApi {
  getCategories () {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}`)
  }

  getCategoriesAll () {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/all`)
  }

  getCategoryById (id) {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/${id}`, {
      params: { id }
    })
  }

  storeCategory ({ data, options = {} }) {
    return this.ctx.$axios.$post(`api/v1/${this.apiUrl}`, {
      data
    }, {
      ...options
    })
  }
}
export { PostCategoryApi }
