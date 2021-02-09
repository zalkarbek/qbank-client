import PerfectScrollbar from 'perfect-scrollbar'
import Dashboard from '~/classes/Dashboard'

export default (context, inject) => {
  inject(
    'dashboard',
    new Dashboard({ jquery: context.app.$jquery, PerfectScrollbar })
  )
}
