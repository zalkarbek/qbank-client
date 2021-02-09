<template>
  <div class="container-fluid">
    <div class="row row-xs">
      <div class="d-sm-flex align-items-center justify-content-between col-md-12 mg-b-20 mg-lg-b-25 mg-xl-b-30">
        <div>
          <h4 class="mg-b-0 tx-spacing--1">
            Количество клиентов по услугам, за выбранное время
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
          <b-col cols="12" class="mb-3">
            <b-row>
              <b-col cols="4">
                <div>
                  <label class="">Начальная дата</label>
                  <input v-model="startDate" type="date" class="form-control" placeholder="Дата начала">
                </div>
              </b-col>
              <b-col cols="4">
                <div>
                  <label class="">Конечная дата</label>
                  <input v-model="endDate" type="date" class="form-control" placeholder="Дата конец">
                </div>
              </b-col>
              <b-col cols="12">
                <button type="button" class="btn btn-primary mt-4" @click="getRequest">
                  Показать
                </button>
              </b-col>
            </b-row>
          </b-col>
          <template v-for="(services, key, index) in groupByService">
            <b-col :key="`${index}_${key}`" cols="3" class="mb-3">
              <div class="card">
                <div class="card-body">
                  <p class="tx-12 tx-uppercase tx-semibold tx-spacing-1 tx-color-02">
                    <span>{{ key }}</span>
                  </p>
                  <template v-for="(service, serviceIndex) in services">
                    <p :key="`${key}_${serviceIndex}`" class="tx-13 tx-color-03 mg-b-0">
                      <template v-if="service.turn_status === 'completed'">
                        Кол-во обслуженных клиентов:
                        <span class="text-success font-weight-bold">
                          {{ service.counted }}
                        </span>
                        <br>
                      </template>
                      <template v-if="service.turn_status === 'fail'">
                        Кол-во неявок:
                        <span class="text-purple font-weight-bold">
                          {{ service.counted }}
                        </span>
                      </template>
                    </p>
                  </template>
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
export default {
  mixins: [dateFormatMixin],
  data () {
    return {
      services: [],
      lastUpdated: new Date(),
      startDate: null,
      endDate: null,
      currentRouteName: 'service-range-served'
    }
  },
  computed: {
    completedServedOperators () {
      return (this.services || []).filter(operator => operator.turn_status === 'completed')
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
    async getRequest () {
      const turnApi = this.$api.getApi('turnApi')
      this.services = await turnApi.getRangeServiceServedCount({
        startDate: this.startDate,
        endDate: this.endDate
      })
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
