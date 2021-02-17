import * as types from '~/store/types'

export default {
  setToken ({ commit, dispatch }, payload) {
    commit(types.SET_LOGIN, { token: payload.token }, { root: true })
    this.$api.setToken(payload.token, 'Bearer', [
      'get',
      'post',
      'put',
      'patch',
      'delete'
    ])
    localStorage.setItem('token', payload.token)
  },

  setTokenLocal ({ commit, dispatch }, payload) {
    commit(types.SET_LOGIN, { token: payload.token }, { root: true })
    localStorage.setItem('token', payload.token)
  },

  logout ({ commit }) {
    commit(types.SET_LOGOUT, null, { root: true })
    localStorage.removeItem('token')
    const authService = this.$api.getApi('authApi')
    return authService.revokeCurrentToken()
  },

  logoutLocal ({ commit }) {
    commit(types.SET_LOGOUT, null, { root: true })
    localStorage.removeItem('token')
  },

  async authenticate ({ commit, dispatch }, payload) {
    const authService = this.$api.getApi('authApi')
    try {
      const response = await authService.authenticate(payload)
      if (response && response.remember_token) {
        await dispatch('setToken', {
          token: response.remember_token
        })
        const user = await dispatch('user/getAndSetCurrentUser', null, { root: true })
        return {
          token: response.remember_token,
          user
        }
      }
      return null
    } catch (e) {
      dispatch('toast/toastDanger', {
        title: this.$i18n.t('error.auth.title'),
        message: this.$i18n.t('error.auth.message')
      },
      {
        root: true
      })
      return null
    }
  },

  async localAuthenticate ({ commit, dispatch }, payload) {
    await dispatch('setToken', {
      token: payload.token
    })
    const user = payload.user
    return {
      token: payload.token,
      user
    }
  }
}
