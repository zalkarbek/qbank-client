import { TimeOut } from '@/classes/TimeOut'
const timer = new TimeOut()

export default ({ app }, inject) => {
  inject('timer', timer)
}
