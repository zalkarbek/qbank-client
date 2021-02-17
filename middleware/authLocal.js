export default async ({ app, store, redirect }) => {
  const token = localStorage.getItem('token')
  const user = JSON.parse(token)
  if (!user) {
    return redirect('/login', { redirectType: 'no-auth' })
  }
  if (user && user.login) {
    const userApi = app.$api.getApi('userApi')
    if (userApi.localUserCompare(user)) {
      await store.dispatch('auth/setTokenLocal', { token: JSON.stringify(user) })
      await store.dispatch('user/setCurrentUser', { user })
      return true
    }
  } else {
    await store.dispatch('auth/logoutLocal')
    return redirect('/login')
  }
}
