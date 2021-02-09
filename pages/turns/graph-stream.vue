<template>
  <div class="container-fluid">
    <div class="row row-xs">
      <div class="d-sm-flex align-items-center justify-content-between col-md-12 mg-b-20 mg-lg-b-25 mg-xl-b-30">
        <div>
          <h4 class="mg-b-0 tx-spacing--1">
            График клиентов, за выбранный диапазон
            <br>
            <span class="h6 text-gray-300">
              Последнее обновление:
              <i class="font-weight-bold text-rsk-bank">{{ formatDateTimeLong(lastUpdated) }}</i>
            </span>
            <br>
            <span class="text-gray-400 h6">
              График показывает промежуток между двумя датами (начальная дата, конечная дата).
              Можно группировать по годам, по месяцам, по дням.
            </span>
          </h4>
        </div>
      </div>
      <b-container fluid>
        <b-row>
          <b-col cols="12" class="mb-3 border-right border-primary">
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
              <b-col cols="12" class="mt-3">
                <button type="button" class="btn btn-dark" @click="getTurnsRangeDate(1, 'months')">
                  За 1 месяц
                </button>
                <button type="button" class="btn btn-dark " @click="getTurnsRangeDate(2, 'months')">
                  За 2 месяца
                </button>
                <button type="button" class="btn btn-dark " @click="getTurnsRangeDate(3, 'months')">
                  За 3 месяца
                </button>
                <button type="button" class="btn btn-dark " @click="getTurnsRangeDate(4, 'months')">
                  За 4 месяца
                </button>
                <button type="button" class="btn btn-dark " @click="getTurnsRangeDate(6, 'months')">
                  За 6 месяца
                </button>
                <button type="button" class="btn btn-dark " @click="getTurnsRangeDate(9, 'months')">
                  За 9 месяца
                </button>
                <button type="button" class="btn btn-dark " @click="getTurnsRangeDate(1, 'year')">
                  За год
                </button>
                <button type="button" class="btn btn-dark " @click="getTurnsRangeDate(2, 'year')">
                  За 2 года
                </button>
                <button type="button" class="btn btn-dark" @click="getTurnsRangeDate(3, 'year')">
                  За 3 года
                </button>
                <button type="button" class="btn btn-dark" @click="getTurnsRangeDate(5, 'year')">
                  За 5 года
                </button>
              </b-col>
              <b-col cols="12" class="mb-4">
                <button type="button" class="btn btn-primary mt-4" @click="getGroupBy('year')">
                  По годам
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getGroupBy('month_year')">
                  По месяцам
                </button>
                <button type="button" class="btn btn-primary mt-4" @click="getGroupBy('day_month_year')">
                  По дням
                </button>
              </b-col>
              <b-col cols="12" class="mb-3">
                <div class="card">
                  <div class="card-header">
                    Фильтр:
                  </div>
                  <div class="card-body tx-center">
                    <chart-line
                      :chart-data="chartData"
                      :options="chartOptions"
                      :height="500"
                    />
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import dateFormatMixin from '@/mixins/dateFormatMixin'
import utilMixin from '@/mixins/utilMixin'
import ChartLine from '@/components/ChartLine'

export default {
  components: {
    ChartLine
  },
  mixins: [dateFormatMixin, utilMixin],
  data () {
    return {
      turns: [],
      lastUpdated: new Date(),
      startDate: null,
      endDate: null,
      dateGroupType: 'days',
      currentRouteName: 'graph-stream',
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ],
      chartData: {
        labels: [],
        datasets: [
          {
            label: '',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
          }
        ]

      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    completedTurns () {
      return (this.turns || []).filter(turns => turns.turn_status === 'completed') || []
    },
    failTurns () {
      return (this.turns || []).filter(turns => turns.turn_status === 'fail') || []
    },
    routeName () {
      return this.$route.name.split('___')[0] || ''
    }
  },
  mounted () {},
  methods: {
    getGroupBy (dateGroupType = 'day_month_year') {
      this.dateGroupType = dateGroupType
      this.getTurnsRage()
    },

    async getTurnsRage () {
      const turnApi = this.$api.getApi('turnApi')
      if (this.dateGroupType === 'day_month_year') {
        this.turns = await turnApi.getTurnsGroupByDayMonthYear({
          startDate: this.startDate,
          endDate: this.endDate
        })
        this.getTurnsChartDataInit()
      }

      if (this.dateGroupType === 'month_year') {
        this.turns = await turnApi.getTurnsGroupByMonthYear({
          startDate: this.startDate,
          endDate: this.endDate
        })
        this.getTurnsChartDataInit()
      }

      if (this.dateGroupType === 'year') {
        this.turns = await turnApi.getTurnsGroupByYear({
          startDate: this.startDate,
          endDate: this.endDate
        })
        this.getTurnsChartDataInit()
      }

      this.lastUpdated = new Date()
    },

    getTurnsRangeDate (number = 1, timeVariant = 'days', endNumber = 0, endTimeVariant = 'days') {
      this.startDate = this.$moment()
        .subtract(number, timeVariant)
        .format('YYYY-MM-DD')

      this.endDate = this.$moment()
        .subtract(endNumber, endTimeVariant)
        .format('YYYY-MM-DD')
    },

    // Диаграмма для зхавершенных очередей
    getTurnsChartDataInit () {
      let chartData = {}
      const datasets = []
      let labels = []

      const completedTurnsData = []
      const completedTurnsLabel = 'Обслуженные клиенты'
      const completedTurnsBackgroundColor = []
      const completedTurnsBorderColor = []

      const failTurnsData = []
      const failTurnsLabel = 'Неявки'
      const failTurnsBackgroundColor = []
      const failTurnsBorderColor = []

      // Настройка завершенных клиентов
      this.completedTurns.forEach((turn) => {
        let date = ''
        if (this.dateGroupType === 'day_month_year') {
          date = this.formatDateLong(`${turn.turn_year}${turn.turn_month}${turn.turn_day}`)
        }
        if (this.dateGroupType === 'month_year') {
          date = `${this.monthNames[Number(turn.turn_month)]} ${turn.turn_year}`
        }
        if (this.dateGroupType === 'year') {
          date = turn.turn_year
        }
        completedTurnsBackgroundColor.push('rgba(32, 201, 151, 0.4)')
        completedTurnsBorderColor.push('rgba(32, 201, 151, 1)')
        labels.push(date)
        completedTurnsData.push(turn.counted)
      })
      // Настройки неявок
      this.failTurns.forEach((turn) => {
        let date = ''
        if (this.dateGroupType === 'day_month_year') {
          date = this.formatDateLong(`${turn.turn_year}${turn.turn_month}${turn.turn_day}`)
        }
        if (this.dateGroupType === 'month_year') {
          date = `${this.monthNames[Number(turn.turn_month)]} ${turn.turn_year}`
        }
        if (this.dateGroupType === 'year') {
          date = turn.turn_year
        }
        failTurnsBackgroundColor.push('rgba(232, 62, 140, 0.4)')
        failTurnsBorderColor.push('rgba(232, 62, 140, 1)')
        labels.push(date)
        failTurnsData.push(turn.counted)
      })

      labels = [...(new Set(labels))]
      datasets.push(
        {
          label: completedTurnsLabel,
          data: completedTurnsData,
          backgroundColor: completedTurnsBackgroundColor,
          borderColor: completedTurnsBorderColor,
          borderWidth: 1
        },
        {
          label: failTurnsLabel,
          data: failTurnsData,
          backgroundColor: failTurnsBackgroundColor,
          borderColor: failTurnsBorderColor,
          borderWidth: 1
        }
      )

      chartData = {
        labels,
        datasets
      }
      this.chartData = chartData
    }

  }
}
</script>
