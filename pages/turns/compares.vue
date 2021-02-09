<template>
  <div class="container-fluid">
    <div class="row row-xs">
      <div class="d-sm-flex align-items-center justify-content-between col-md-12 mg-b-20 mg-lg-b-25 mg-xl-b-30">
        <div>
          <h4 class="mg-b-0 tx-spacing--1">
            Сравнение потока клиента, за выбранное время
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
          <b-col cols="6" class="mb-3 border-right border-primary">
            <b-row>
              <b-col cols="4">
                <div>
                  <label class="">Начальная дата</label>
                  <input v-model="startDateLeft" type="date" class="form-control" placeholder="Дата начала">
                </div>
              </b-col>
              <b-col cols="4">
                <div>
                  <label class="">Конечная дата</label>
                  <input v-model="endDateLeft" type="date" class="form-control" placeholder="Дата конец">
                </div>
              </b-col>
              <b-col cols="3">
                <div>
                  <label class="">Кнопка для показа</label>
                  <input type="button" value="Показать" class="btn btn-dark" @click="getLeftTurnsRage">
                </div>
              </b-col>
              <b-col cols="12" class="mb-4">
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsLeftRangeDate(3, 'months')">
                  За три месяца
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsLeftRangeDate(2, 'months')">
                  За два месяца
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsLeftRangeDate(1, 'months')">
                  За месяц
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsLeftRangeDate(10, 'days')">
                  За 10 дней
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsLeftRangeDate(7, 'days')">
                  За 7 дней
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsLeftRangeDate(3, 'days')">
                  За три дня
                </button>
                <button
                  type="button"
                  class="btn btn-primary mt-4"
                  @click="getTurnsLeftRangeDate(
                    1,'days',
                    1, 'days'
                  )"
                >
                  Вчера
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsLeftRangeDate(0, 'days')">
                  Сегодня
                </button>
              </b-col>
              <template v-for="statusKey in turnStatusKeysLeft">
                <b-col v-if="statusKey!== 'redirect'" :key="statusKey" cols="12" class="mb-3">
                  <div class="card">
                    <div class="card-body tx-center">
                      <h4 class="tx-normal tx-rubik tx-40 tx-spacing--1 mg-b-0">
                        <span
                          :class="{
                            'text-primary': statusKey === 'new',
                            'text-info': statusKey === 'served',
                            'text-success': statusKey === 'completed',
                            'text-purple': statusKey === 'fail',
                            'text-warning': statusKey === 'waiting',
                          }"
                        >
                          {{ countByStatusLeft[statusKey] }}
                        </span>
                      </h4>
                      <p class="tx-12 tx-uppercase tx-semibold tx-spacing-1 tx-color-02">
                        <span v-if="statusKey === 'new'" class="">Новых очередей</span>
                        <span v-if="statusKey === 'served'" class="">Обслуживается клиентов</span>
                        <span v-if="statusKey === 'completed'">Завершенные</span>
                        <span v-if="statusKey === 'fail'">Неявка</span>
                        <span v-if="statusKey === 'waiting'">В ожидании</span>
                      </p>
                      <p class="tx-12 tx-color-03 mg-b-0">
                        <span v-if="statusKey === 'new'" class="">
                          Новые клиенты
                        </span>
                        <span v-if="statusKey === 'served'" class="">
                          Клиенты обслуживается
                        </span>
                        <span v-if="statusKey === 'completed'">
                          Завешенные талоны
                        </span>
                        <span v-if="statusKey === 'fail'">
                          Талоны которые были отменены
                        </span>
                        <span v-if="statusKey === 'waiting'">
                          Клиенты ждущие в ожидании
                        </span>
                      </p>
                    </div>
                  </div>
                </b-col>
              </template>
            </b-row>
          </b-col>
          <b-col cols="6" class="mb-3">
            <b-row>
              <b-col cols="4">
                <div>
                  <label class="">Начальная дата</label>
                  <input v-model="startDateRight" type="date" class="form-control" placeholder="Дата начала">
                </div>
              </b-col>
              <b-col cols="4">
                <div>
                  <label class="">Конечная дата</label>
                  <input v-model="endDateRight" type="date" class="form-control" placeholder="Дата конец">
                </div>
              </b-col>
              <b-col cols="3">
                <div>
                  <label class="">Кнопка для показа</label>
                  <input type="button" value="Показать" class="btn btn-dark" @click="getRightTurnsRage">
                </div>
              </b-col>
              <b-col cols="12" class="mb-4">
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsRightRangeDate(3, 'months')">
                  За три месяца
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsRightRangeDate(2, 'months')">
                  За два месяца
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsRightRangeDate(1, 'months')">
                  За месяц
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsRightRangeDate(10, 'days')">
                  За 10 дней
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsRightRangeDate(7, 'days')">
                  За 7 дней
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsRightRangeDate(3, 'days')">
                  За три дня
                </button>
                <button
                  type="button"
                  class="btn btn-primary mt-4"
                  @click="getTurnsRightRangeDate(
                    1, 'days',
                    1, 'days'
                  )"
                >
                  Вчера
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getTurnsRightRangeDate(0, 'days')">
                  Сегодня
                </button>
              </b-col>
              <template v-for="statusKey in turnStatusKeysRight">
                <b-col v-if="statusKey !== 'redirect'" :key="statusKey" cols="12" class="mb-3">
                  <div class="card">
                    <div class="card-body tx-center">
                      <h4 class="tx-normal tx-rubik tx-40 tx-spacing--1 mg-b-0">
                        <span
                          :class="{
                            'text-primary': statusKey === 'new',
                            'text-info': statusKey === 'served',
                            'text-success': statusKey === 'completed',
                            'text-purple': statusKey === 'fail',
                            'text-warning': statusKey === 'waiting',
                          }"
                        >
                          {{ countByStatusRight[statusKey] }}
                        </span>
                      </h4>
                      <p class="tx-12 tx-uppercase tx-semibold tx-spacing-1 tx-color-02">
                        <span v-if="statusKey === 'new'" class="">Новых очередей</span>
                        <span v-if="statusKey === 'served'" class="">Обслуживается клиентов</span>
                        <span v-if="statusKey === 'completed'">Завершенные</span>
                        <span v-if="statusKey === 'fail'">Неявка</span>
                        <span v-if="statusKey === 'waiting'">В ожидании</span>
                      </p>
                      <p class="tx-12 tx-color-03 mg-b-0">
                        <span v-if="statusKey === 'new'" class="">
                          Новые клиенты
                        </span>
                        <span v-if="statusKey === 'served'" class="">
                          Клиенты обслуживается
                        </span>
                        <span v-if="statusKey === 'completed'">
                          Завешенные талоны
                        </span>
                        <span v-if="statusKey === 'fail'">
                          Талоны которые были отменены
                        </span>
                        <span v-if="statusKey === 'waiting'">
                          Клиенты ждущие в ожидании
                        </span>
                      </p>
                    </div>
                  </div>
                </b-col>
              </template>
            </b-row>
          </b-col>
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
      turnsLeft: [],
      turnsRight: [],
      lastUpdated: new Date(),

      startDateLeft: null,
      endDateLeft: null,

      startDateRight: null,
      endDateRight: null,
      currentRouteName: 'compares'
    }
  },
  computed: {
    uniqueTurnsLeft () {
      return this.turnsLeft
    },
    countByStatusLeft () {
      return this.$lo.countBy(this.uniqueTurnsLeft, 'turn_status') || {}
    },
    turnStatusKeysLeft () {
      return Object.keys(this.countByStatusLeft)
    },
    uniqueTurnsRight () {
      return this.turnsRight
    },
    countByStatusRight () {
      return this.$lo.countBy(this.uniqueTurnsRight, 'turn_status') || {}
    },
    turnStatusKeysRight () {
      return Object.keys(this.countByStatusRight)
    },
    routeName () {
      return this.$route.name.split('___')[0] || ''
    }
  },
  mounted () {},
  methods: {
    getTurnsLeftRangeDate (number = 1, timeVariant = 'days', endNumber = 0, endTimeVariant = 'days') {
      this.startDateLeft = this.$moment()
        .subtract(number, timeVariant)
        .format('YYYY-MM-DD')

      this.endDateLeft = this.$moment()
        .subtract(endNumber, endTimeVariant)
        .format('YYYY-MM-DD')
    },

    getTurnsRightRangeDate (number = 1, timeVariant = 'days', endNumber = 0, endTimeVariant = 'days') {
      this.startDateRight = this.$moment()
        .subtract(number, timeVariant)
        .format('YYYY-MM-DD')

      this.endDateRight = this.$moment()
        .subtract(endNumber, endTimeVariant)
        .format('YYYY-MM-DD')
    },

    async getLeftTurnsRage () {
      const turnApi = this.$api.getApi('turnApi')
      this.turnsLeft = await turnApi.getRangeTurns({
        startDate: this.startDateLeft,
        endDate: this.endDateLeft
      })
      this.lastUpdated = new Date()
    },
    async getRightTurnsRage () {
      const turnApi = this.$api.getApi('turnApi')
      this.turnsRight = await turnApi.getRangeTurns({
        startDate: this.startDateRight,
        endDate: this.endDateRight
      })
      this.lastUpdated = new Date()
    }
  }
}
</script>
