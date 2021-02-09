import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import progressbarConfig from '@/config/progressbar'

export default (ctx, inject) => {
  Vue.use(VueProgressBar, progressbarConfig)
}
