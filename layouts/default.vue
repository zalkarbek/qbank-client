<template>
  <div class="body">
    <app-sidebar />
    <div class="content ht-100v pd-0">
      <app-header />
      <div class="content-body">
        <nuxt />
      </div>
      <app-footer />
    </div>
  </div>
</template>
<script>
import Header from '@/layouts/part/header'
import Footer from '@/layouts/part/footer'
import Sidebar from '@/layouts/part/sidebar'

export default {
  middleware: ['authLocal'],
  loading: true,
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-sidebar': Sidebar
  },
  mounted () {
    setTimeout(() => {
      this.$dashboard.navBarInit()
      this.$dashboard.navBarSearch()
      this.$dashboard.sidebarInit()
      this.$dashboard.asideInit()
    }, 1000)

    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
      // this.$store.dispatch('toast/toastSuccess', {
      //   message: 'hello world'
      // })
    })
  },
  head () {
    return this.$nuxtI18nSeo()
  },
  loadingIndicator: {
    name: 'circle',
    color: '#0A6E9E',
    background: 'white'
  }
}
</script>

<style>
</style>
