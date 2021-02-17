export default ({ app, store, redirect }) => {
  const token = localStorage.getItem('token')
  const user = JSON.parse(token)
  if (!user) {
    return redirect('/login', { redirectType: 'no-auth' })
  }
  if (user && user.login && !store.state.logged) {
    const userApi = app.$api.getApi('userApi')
    if (userApi.isTrueLocalUser(user)) {
      store.dispatch('auth/setToken', { token })
      store.dispatch('user/setCurrentUser', { user })
      return true
    }
  }
  store.dispatch('auth/logout')
  return redirect('/login')
}
