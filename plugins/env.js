export default (context, inject) => {
  inject('env', {
    isDev: context.env.isDev,
    isProd: context.env.isProd
  })
}
