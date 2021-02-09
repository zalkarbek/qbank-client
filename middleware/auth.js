export default async ({ app, store, redirect }) => {
  const token = store.state.token || localStorage.getItem('token')
  if (!token) {
    await store.dispatch('logout')
    return redirect('/login', { redirectType: 'no-auth' })
  }
  if (token && !store.state.logged) {
    store.dispatch('auth/setToken', { token })
    const userApi = app.$api.getApi('userApi')
    userApi.getCurrentUserProfile().then((user) => {
      if (user && user.user_name) {
        store.dispatch('user/setCurrentUser', { user })
        return true
      } else {
        store.dispatch('auth/logout')
        return redirect('/login')
      }
    })
      .catch((e) => {
        redirect('/login')
      })
  }
  return true
}
