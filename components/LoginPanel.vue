<template>
  <div class="sign-wrapper">
    <b-img-lazy
      center
      src="~/static/images/rskbank.jpg"
      width="64"
    />
    <div class="wd-100p mt-2">
      <h4 class="tx-color-01 mg-b-5 text-center">
        <slot name="title" />
      </h4>
      <p class="tx-color-03 tx-16 mg-b-40 text-center">
        <slot name="description" />
      </p>

      <div class="form-group">
        <label for="login_input">Логин</label>
        <input
          id="login_input"
          v-model="login"
          :placeholder="$t('placeholder.enterLogin')"
          type="text"
          class="form-control"
          @keyup="onEnter"
        >
      </div>
      <div class="form-group">
        <div class="d-flex justify-content-between mg-b-5">
          <label for="password_input" class="mg-b-0-f">
            Пароль
          </label>
        </div>
        <input
          id="password_input"
          v-model="password"
          :placeholder="$t('placeholder.enterPassword')"
          type="password"
          class="form-control"
          @keyup="onEnter"
        >
      </div>
      <div class="form-group tx-12">
        Строго <strong class="text-danger">не рекомендуется</strong>
        сохранять пароль у браузера
      </div>

      <button class="btn btn-brand-01 btn-block" @click="auth">
        Вход
      </button>
      <div class="divider-text">
        язык
      </div>
      <div class="tx-13 mg-t-20 tx-center">
        Забыли пароль ?
        <nuxt-link to="/login">
          Восстановить
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    containerClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    auth () {
      this.$emit('onLogin', { login: this.login, password: this.password })
    },
    onEnter ($event) {
      if ($event.keyCode === 13) {
        if (!this.login) {
          this.$bvToast.toast(this.$i18n.t('require.email') || '', {
            title: this.$i18n.t('require.title'),
            variant: 'warning'
          })
          return
        }
        if (!this.password) {
          this.$bvToast.toast(this.$i18n.t('require.password') || '', {
            title: this.$i18n.t('require.title'),
            variant: 'warning'
          })
          return
        }
        this.$emit('onLogin', { login: this.login, password: this.password })
      }
    }
  }
}
</script>
