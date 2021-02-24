<template>
  <aside class="aside aside-fixed">
    <div class="aside-header">
      <nuxt-link to="/" class="aside-logo" style="font-weight: bolder">
        РСК <span>Банк</span>
      </nuxt-link>
      <a href="" class="aside-menu-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </a>
    </div>
    <div class="aside-body ps ps--active-y">
      <div class="aside-loggedin">
        <div class="d-flex align-items-center justify-content-start">
          <a href="" class="avatar">
            <img src="/images/user.png" class="rounded-circle" alt="">
          </a>
          <div class="aside-alert-link" />
        </div>
        <div class="aside-loggedin-user">
          <div class="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
            <h6 class="tx-semibold mg-b-0">
              {{ currentUser.name }}
            </h6>
          </div>
          <p class="tx-color-03 tx-12 mg-b-0">
            {{ currentUser.login }}
          </p>
        </div>
        <div id="loggedinMenu" class="collapse show">
          <ul class="nav nav-aside mg-b-0">
            <li class="nav-item cursor-pointer">
              <a class="nav-link" @click="logout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                <span>Выйти</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="nav nav-aside">
        <template v-for="(menu, index) in menusFilteredToRole">
          <template v-if="menu.type === 'title'">
            <li :key="index" :class="menu.class">
              {{ menu.content }}
            </li>
          </template>
          <template v-if="menu.type === 'link'">
            <li :key="index" :class="menu.class">
              <nuxt-link :to="menu.to" class="nav-link">
                <span>{{ menu.content }}</span>
              </nuxt-link>
            </li>
          </template>
        </template>
      </ul>
    </div>
  </aside>
</template>
<script>
import menus from '~/data/menus'
import users from '~/data/users'

export default {
  data () {
    return {
      menus,
      users
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.user.current || {}
    },
    currentUserRoles () {
      return this.currentUser.roles || []
    },
    menusFilteredToRole () {
      return this.menus.filter((menu) => {
        return menu.roles.some((role) => {
          if (this.currentUserRoles && Array.isArray(this.currentUserRoles)) {
            return this.currentUserRoles.includes(role)
          }
          return false
        })
      })
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logoutLocal')
      await this.$router.push(this.localePath({ name: 'login' }))
    }
  }
}
</script>
