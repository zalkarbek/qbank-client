import {
  COMMIT_AUTHENTICATED
} from '~/store/types'

export default {
  [COMMIT_AUTHENTICATED] (state) {
    state.authenticated = true
  }
}
