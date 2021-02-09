<template>
  <div class="container-fluid">
    <div class="row row-xs">
      <div class="d-sm-flex align-items-center justify-content-between col-md-12 mg-b-20 mg-lg-b-25 mg-xl-b-30">
        <div>
          <h4 class="mg-b-0 tx-spacing--1">
            Количество обслуженных клиентов операторами, за сегодня
            <br>
            <span class="h6 text-gray-300">
              Последнее обновление:
              <i class="font-weight-bold text-rsk-bank">{{ formatDateTimeLong(lastUpdated) }}</i>
            </span>
          </h4>
        </div>
      </div>
      <div class="col-md-12">
        <b-row>
          <template v-for="(operators, key) in groupByOperator">
            <b-col :key="key" cols="2" class="mb-3">
              <div class="card">
                <div class="card-body tx-center">
                  <h4 class="tx-normal tx-rubik tx-40 tx-spacing--1 mg-b-0">
                    <span class="text-success">
                      {{ getCompletedAndRedirectCounted(operators) }}
                    </span>
                  </h4>
                  <p class="tx-12 tx-uppercase tx-semibold tx-spacing-1 tx-color-02">
                    <span>{{ getProp(operators, '0.user_name', '') }}</span>
                  </p>
                  <p class="tx-12 tx-color-03 mg-b-0">
                    Количество обслуженных клиентов
                  </p>
                </div>
              </div>
            </b-col>
          </template>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
import dateFormatMixin from '@/mixins/dateFormatMixin'
import utilMixin from '@/mixins/utilMixin'

export default {
  mixins: [dateFormatMixin, utilMixin],
  data () {
    return {
      operators: [],
      lastUpdated: new Date(),
      currentRouteName: 'operator-today-served'
    }
  },
  computed: {
    groupByOperator () {
      return this.$lo.groupBy(this.operators, 'user_name') || {}
    },
    routeName () {
      return this.$route.name.split('___')[0] || ''
    }
  },
  mounted () {
    this.getRequestEveryTimes()
  },
  methods: {
    getCompletedAndRedirectCounted (operators) {
      const completed = this.$lo.find(operators, { turn_status: 'completed' }) || {}
      const redirected = this.$lo.find(operators, { turn_status: 'redirect' }) || {}
      let completedCount = 0
      let redirectCount = 0
      if (completed && completed.counted) {
        completedCount = completed.counted
      }
      if (redirected && redirected.counted) {
        redirectCount = redirected.counted
      }
      return Number(completedCount) + Number(redirectCount)
    },
    async getRequest () {
      const turnApi = this.$api.getApi('turnApi')
      this.operators = await turnApi.getTodayOperatorServedCount()
    },
    async getRequestEveryTimes () {
      await this.getRequest()
      this.lastUpdated = new Date()
      await this.$timer.pause(30000)
      if (this.routeName === this.currentRouteName) {
        await this.getRequestEveryTimes()
      }
    }
  }
}
</script>
