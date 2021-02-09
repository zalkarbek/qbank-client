<template>
  <div class="container-fluid">
    <div class="row row-xs">
      <div class="d-sm-flex align-items-center justify-content-between col-md-12 mg-b-20 mg-lg-b-25 mg-xl-b-30">
        <div>
          <h4 class="mg-b-0 tx-spacing--1">
            Бегущая строка
          </h4>
        </div>
      </div>
      <div class="col-md-12">
        <div class="card">
          <div class="card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25">
            <div class="row">
              <div class="col-md-12 mb-4">
                <b-form-group
                  description="Текст бегущий строки"
                  class="mb-0"
                >
                  <b-form-input
                    v-model="tvTabloTickerText"
                    placeholder="Текст"
                  />
                </b-form-group>
              </div>
              <div class="col-md-4">
                <div class="btn-group mg-t-20 mg-sm-t-0">
                  <button class="btn btn-white btn-uppercase" @click="saveTvTabloTickerText">
                    <i class="fad fa-save" />
                    Сохранит/Изменить
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body pd-lg-25">
            <table class="table table-bordered table-sm">
              <thead class="font-weight-bold">
                <tr>
                  <td>
                    Текущее значение текста бегущей строки
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ tvTablosTicker.tvtablo_text }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tvTabloTickerText: '',
      tvTablosTicker: {}
    }
  },
  async mounted () {
    await this.getTvText()
  },
  methods: {
    async getTvText () {
      const api = this.$api.getApi('tvTabloApi')
      this.tvTablosTicker = await api.getTvTabloTickerText()
    },

    async saveTvTabloTickerText () {
      const api = this.$api.getApi('tvTabloApi')
      const response = await api.saveTvTabloTickerText({
        text: this.tvTabloTickerText
      })
      if (response && response.success) {
        await this.$store.dispatch('toast/toastSuccess', {
          message: 'Бегущая строка успешно изменено'
        })
        await this.getTvText()
      } else {
        await this.$store.dispatch('toast/toastDanger', {
          message: 'Невозможно изменить бегущую строку'
        })
        await this.getAds()
      }
    },

    toClearForm () {
      this.ads = {
        file: {},
        department: '',
        duration: null
      }
    }
  }
}
</script>
