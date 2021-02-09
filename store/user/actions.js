import * as types from '~/store/types'

export default {
  getUserProfile (ctx) {
    const userApi = this.$api.getApi('userApi')
    return userApi.getCurrentUserProfile()
  },

  async getAndSetCurrentUser ({ commit, dispatch }) {
    try {
      const user = await dispatch('getUserProfile')
      commit(types.SET_CURRENT_USER, { user })
      return user
    } catch (e) {
      dispatch('toast/toastDanger', {
        message: this.$i18n.t('error.user.getProfileError')
      }, { root: true })
      dispatch('auth/logout', null, { root: true })
      return null
    }
  },

  setCurrentUser ({ commit }, { user }) {
    commit(types.SET_CURRENT_USER, { user })
  }
}
