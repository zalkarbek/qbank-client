<template>
  <div class="container-fluid">
    <div class="row row-xs">
      <div class="d-sm-flex align-items-center justify-content-between col-md-12 mg-b-20 mg-lg-b-25 mg-xl-b-30">
        <div>
          <h4 class="mg-b-0 tx-spacing--1">
            Количество обслуженных клиентов по услугам, за сегодня
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
          <template v-for="(services, key) in groupByService">
            <b-col :key="key" cols="12">
              <h2 class="text-center">
                {{ key }}
              </h2>
            </b-col>
            <template v-for="(served, index) in services">
              <b-col v-if="served.turn_status !== 'redirect'" :key="`${key}_${index}`" cols="2" class="mb-3">
                <div class="card">
                  <div class="card-body tx-center">
                    <h4 class="tx-normal tx-rubik tx-40 tx-spacing--1 mg-b-0">
                      <span
                        :class="{
                          'text-primary': served.turn_status === 'new',
                          'text-info': served.turn_status === 'served',
                          'text-success': served.turn_status === 'completed',
                          'tx-pink': served.turn_status === 'fail',
                          'text-warning': served.turn_status === 'waiting',
                        }"
                      >
                        {{ served.counted }}
                      </span>
                    </h4>
                    <p class="tx-12 tx-uppercase tx-semibold tx-spacing-1 tx-color-02">
                      <!-- <span>{{ served.service_name }}</span> -->
                    </p>
                    <p class="tx-12 tx-color-03 mg-b-0">
                      <span v-if="served.turn_status === 'new'">
                        Новые клиенты
                      </span>
                      <span v-if="served.turn_status === 'served'">
                        Клиенты обслуживается
                      </span>
                      <span v-if="served.turn_status === 'completed'">
                        Завешенные
                      </span>
                      <span v-if="served.turn_status === 'fail'">
                        Талоны которые были отменены
                      </span>
                      <span v-if="served.turn_status === 'waiting'">
                        Клиенты ждущие в ожидании
                      </span>
                    </p>
                  </div>
                </div>
              </b-col>
            </template>
          </template>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
import dateFormatMixin from '@/mixins/dateFormatMixin'
export default {
  mixins: [dateFormatMixin],
  data () {
    return {
      services: [],
      lastUpdated: new Date(),
      currentRouteName: 'service-today-served'
    }
  },
  computed: {
    completedServedServices () {
      return (this.services || []).filter(service => service.turn_status === 'completed')
    },
    groupByService () {
      return this.$lo.groupBy(this.services, 'service_name')
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
    async getServiceServedCount () {
      const turnApi = this.$api.getApi('turnApi')
      this.services = await turnApi.getTodayServiceServedCount()
    },
    async getRequestEveryTimes () {
      await this.getServiceServedCount()
      this.lastUpdated = new Date()
      await this.$timer.pause(30000)
      if (this.routeName === this.currentRouteName) {
        await this.getRequestEveryTimes()
      }
    }
  }
}
</script>
