import { BaseApi } from '~/api/BaseApi'

class TerminalApi extends BaseApi {
  getDepartmentAddress () {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/department-address-lists`)
  }

  setDepartmentDB (departmentKey) {
    return this.ctx.$axios.$post(`api/v1/${this.apiUrl}/department-address-change`, {
      departmentKey
    })
  }
}
export { TerminalApi }
