import {
  SET_CURRENT_LOCALE,
  SET_LOGIN,
  SET_LOGOUT,
  SET_SOCKET
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
  }
}
