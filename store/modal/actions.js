export default {
  async confirm (ctx, options) {
    return await this._vm.$bvModal
      .msgBoxConfirm(options.message, {
        title: options.message,
        size: options.size,
        okVariant: options.okVariant,
        okTitle: options.okTitle,
        cancelTitle: options.cancelTitle,
        footerClass: options.footerClass,
        hideHeaderClose: options.hideHeaderClose,
        centered: options.centered
      })
  },
  defaultConfig (ctx, config = {}) {
    return {
      message: this.$i18n.t('modal.message'),
      title: this.$i18n.t('modal.title'),
      size: 'md',
      okVariant: 'primary',
      okTitle: this.$i18n.t('button.yes'),
      cancelTitle: this.$i18n.t('button.cancel'),
      footerClass: 'p-2',
      hideHeaderClose: false,
      centered: true,
      ...config
    }
  },
  async confirmDelete ({ dispatch }, config = {}) {
    const appendConfig = await dispatch('defaultConfig')
    const cfg = {
      ...appendConfig,
      message: this.$i18n.t('modal.deleteConfirmMessage'),
      title: this.$i18n.t('modal.deleteConfirmTitle'),
      size: 'sm',
      okVariant: 'danger',
      hideHeaderClose: false,
      centered: true,
      ...config
    }
    return dispatch('confirm', cfg)
  },
  async confirmUpdate ({ dispatch }, config = {}) {
    const appendConfig = await dispatch('defaultConfig')
    const cfg = {
      ...appendConfig,
      message: this.$i18n.t('modal.updateConfirmMessage'),
      title: this.$i18n.t('modal.updateConfirmMessage'),
      size: 'sm',
      okVariant: 'warning',
      footerClass: 'p-2',
      hideHeaderClose: false,
      centered: true,
      ...config
    }
    return dispatch('confirm', cfg)
  }
}
