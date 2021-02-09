export default async ({ app, store, redirect }) => {
  const token = store.state.token || localStorage.getItem('token')
  if (!token) {
    await store.dispatch('logout')
    return redirect('/login', { redirectType: 'no-auth' })
  }
  if (token && !store.state.logged) {
    app.$api.setToken(token)
    const authApi = app.$api.getApi('authApi')

    authApi
      .getUserProfile()
      .then(async (data) => {
        if (!data.error && data.user) {
          await store.dispatch('login', { user: data.user, token })
          return true
        } else {
          await store.dispatch('logout')
          return redirect('/login')
        }
      })
      .catch(() => redirect('/login', { redirectType: 'server-error' }))
  }
  return true
}
