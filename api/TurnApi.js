import { BaseApi } from '~/api/BaseApi'

class TurnApi extends BaseApi {
  getTodayTurns () {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/today`)
  }

  getRangeTurns (params) {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/range`, { params })
  }

  deleteAdsById (id) {
    return this.ctx.$axios.$delete(`api/v1/${this.apiUrl}/${id}`)
  }

  getTodayOperatorServedCount () {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/operators/served/today`)
  }

  getTodayServiceServedCount () {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/services/served/today`)
  }

  getRangeOperatorServedCount (params) {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/operators/served/range`, {
      params
    })
  }

  getRangeServiceServedCount (params) {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/services/served/range`, {
      params
    })
  }

  getTurnsGroupByDayMonthYear (params) {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/group_day_month_year`, {
      params
    })
  }

  getTurnsGroupByMonthYear (params) {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/group_month_year`, {
      params
    })
  }

  getTurnsGroupByYear (params) {
    return this.ctx.$axios.$get(`api/v1/${this.apiUrl}/group_year`, {
      params
    })
  }
}
export { TurnApi }
