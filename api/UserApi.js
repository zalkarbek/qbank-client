import { BaseApi } from '~/api/BaseApi'

class UserApi extends BaseApi {
  getUsers () {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/index`)
  }

  getUserById (id) {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/${id}`, {
      params: { id }
    })
  }

  isTrueLocalUser (user) {

  }
}
export { UserApi }
