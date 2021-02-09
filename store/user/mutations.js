import {
  SET_CURRENT_USER,
  SET_USER_LOGOUT
} from '~/store/types'

export default {
  [SET_CURRENT_USER] (state, { user }) {
    state.current = user
  },
  [SET_USER_LOGOUT] (state) {
    state.current = {}
  }
}
