import keyboard from 'keyboardjs'

export default ({ app }, inject) => {
  inject('keyboard', keyboard)
}
