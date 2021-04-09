import {
  SET_CURRENT_LOCALE,
  SET_LOGIN,
  SET_LOGOUT,
  SET_SOCKET,
  SET_CURRENT_DEPARTMENT
} from '~/store/types'

export default {
  [SET_CURRENT_LOCALE] (state, { locale }) {
    state.currentLocale = locale
  },
  [SET_LOGIN] (state, { token }) {
    state.token = token
    state.logged = true
  },
  [SET_LOGOUT] (state) {
    state.token = null
    state.logged = false
  },
  [SET_SOCKET] (state, { socks }) {
    state.socks = socks
  },

  [SET_CURRENT_DEPARTMENT] (state, { department }) {
    state.currentDepartment = department
  }
}
