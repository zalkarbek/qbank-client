import api from '../api'

export default (ctx, inject) => {
  ctx.$axios.defaults.withCredentials = true
  // ctx.$axios.defaults.baseURL = window.location.origin
  inject('api', api(ctx))

  ctx.$axios.onError((error) => {
    const status = Number(error.response && error.response.status)
    if (status === 404) {
      ctx.redirect('/404')
    }
    ctx.app.$eventBus.$emit('request.onError', { error, status })
    return Promise.reject(error)
  })

  ctx.$axios.interceptors.request.use((config) => {
    return config
  }, (e) => {
    return Promise.reject(e)
  })

  ctx.$axios.interceptors.response.use((response) => {
    return response
  }, (e) => {
    return Promise.reject(e)
  })
}
