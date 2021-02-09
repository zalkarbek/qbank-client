import lodash from 'lodash'

export default ({ app }, inject) => {
  inject('lo', lodash)
}
