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
    let compared = false
    const user = localUsers.find((localeUser) => {
      return localeUser.login === compareUser.login
    })
    if (user && user.password && compareUser && compareUser.password) {
      compared = user.password === compareUser.password
    }
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
