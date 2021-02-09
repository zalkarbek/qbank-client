<template>
  <div class="container-fluid">
    <div class="row row-xs">
      <div class="d-sm-flex align-items-center justify-content-between col-md-12 mg-b-20 mg-lg-b-25 mg-xl-b-30">
        <div>
          <h4 class="mg-b-0 tx-spacing--1">
            Очереди за выбранный период
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
          <template v-for="statusKey in turnStatusKeys">
            <b-col v-if="statusKey !=='redirect'" :key="statusKey" cols="2" class="mb-3">
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
                      {{ countByStatus[statusKey] }}
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
      </div>
      <div class="col-md-12" style="height: 600px; overflow-y: scroll">
        <div class="card">
          <div class="card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25">
            <div class="row" />
          </div>
          <div class="card-body pd-lg-25">
            <table class="table table-bordered table-sm">
              <thead class="font-weight-bold">
                <tr>
                  <td>#</td>
                  <td>
                    Номер талона
                  </td>
                  <td>
                    Статус
                  </td>
                  <td>
                    Обслужил
                  </td>
                  <td>
                    Должность/Отдел
                  </td>
                  <td>
                    Услуга
                  </td>
                  <td>
                    Перенаправил
                  </td>
                  <td>
                    К кому перенаправлен
                  </td>
                  <td>
                    Дата начала
                  </td>
                  <td>
                    Дата завершения
                  </td>
                </tr>
              </thead>
              <tbody>
                <template v-for="(turn, index) in turns">
                  <tr
                    :key="turn.id"
                    :class="{
                      'bg-primary-light': turn.turn_status === 'new',
                      'bg-info-light': turn.turn_status === 'served',
                      'bg-success-light': turn.turn_status === 'completed',
                      'bg-pink-light': turn.turn_status === 'fail',
                      'bg-warning-light': turn.turn_status === 'waiting',
                      'bg-brand-01-light': turn.turn_status ==='redirect'
                    }"
                  >
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      <span class="font-weight-bold">{{ `${turn.suffix}${turn.turn_nomer}` }}</span>
                    </td>
                    <td class="font-weight-bold">
                      <span v-if="turn.turn_status === 'new'" class="">новый</span>
                      <span v-if="turn.turn_status === 'served'" class="">обслуживается</span>
                      <span v-if="turn.turn_status === 'completed'">завершен</span>
                      <span v-if="turn.turn_status === 'redirect'">завершен</span>
                      <span v-if="turn.turn_status === 'fail'">неявка</span>
                      <span v-if="turn.turn_status === 'waiting'">в ожидании</span>
                    </td>
                    <td>{{ turn.user_name }}</td>
                    <td>{{ turn.position_name }}</td>
                    <td>{{ turn.service_name }}</td>
                    <td>
                      <span class="font-weight-bold">
                        {{ getProp(usersGroupById[turn.turn_came_from_user_id], '[0].user_name', '') }}
                      </span>
                    </td>
                    <td>
                      <span class="font-weight-bold">
                        <span v-if="turn.turn_this_way_user_id === 0">
                          Касса
                        </span>
                        <span v-else>
                          {{ getProp(usersGroupById[turn.turn_this_way_user_id], '[0].user_name', '') }}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span class="font-weight-bold">
                        {{ formatDateTimeBase(turn.turn_created_at) }}
                      </span>
                    </td>
                    <td>
                      <span class="font-weight-bold">
                        {{ formatDateTimeBase(turn.turn_updated_at) }}
                      </span>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
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
      turns: [],
      users: [],
      lastUpdated: new Date(),
      startDate: null,
      endDate: null,
      currentRouteName: 'range-list'
    }
  },
  computed: {
    uniqueTurns () {
      return this.turns
    },
    countByStatus () {
      return this.$lo.countBy(this.uniqueTurns, 'turn_status') || {}
    },
    turnStatusKeys () {
      return Object.keys(this.countByStatus)
    },
    usersGroupById () {
      return this.$lo.groupBy(this.users, 'id')
    }
  },
  mounted () {
    this.getUsersRequest()
    this.getRequestEveryTimes()
  },
  methods: {
    async getUsersRequest () {
      const userApi = this.$api.getApi('userApi')
      this.users = await userApi.getUsers()
    },
    async getRequest () {
      const turnApi = this.$api.getApi('turnApi')
      this.turns = await turnApi.getRangeTurns({
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
    },
    toClearForm () {
      this.turns = []
    }
  }
}
</script>
