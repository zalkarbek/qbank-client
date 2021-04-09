import * as types from '~/store/types'

export default {
  initCurrentLocale ({ commit, state }) {
    let locale = localStorage.getItem('currentLocale')
    if (
      Array.isArray(state.supportedLocales) &&
      !state.supportedLocales.find(element => element === locale)
    ) {
      locale = state.defaultLocale
      localStorage.setItem('currentLocale', locale)
    }
    commit(types.SET_CURRENT_LOCALE, { locale })
  },

  setCurrentLocale ({ commit }, { locale }) {
    localStorage.setItem('currentLocale', locale)
    commit(types.SET_CURRENT_LOCALE, { locale })
  },
  async setCurrentDepartment ({ commit }, { department }) {
    const terminalApi = this.$api.getApi('terminalApi')
    await terminalApi.setDepartmentDB(department.key)
    commit(types.SET_CURRENT_DEPARTMENT, { department })
  }
}
