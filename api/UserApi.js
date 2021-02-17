import { BaseApi } from '~/api/BaseApi'

import localUsers from '~/data/users'

class UserApi extends BaseApi {
  getUsers () {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/index`)
  }

  getUserById (id) {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/${id}`, {
      params: { id }
    })
  }

  localUserCompare (compareUser) {
    const user = localUsers.find((localeUser) => {
      return localeUser.login === compareUser.login
    })
    const compared = user.password === compareUser.password
    if (compared) {
      return {
        user,
        token: JSON.stringify(user)
      }
    }
    return { error: true }
  }
}
export { UserApi }
