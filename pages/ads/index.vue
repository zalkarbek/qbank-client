<template>
  <div class="container-fluid">
    <div class="row row-xs">
      <div class="d-sm-flex align-items-center justify-content-between col-md-12 mg-b-20 mg-lg-b-25 mg-xl-b-30">
        <div>
          <h4 class="mg-b-0 tx-spacing--1">
            Загрузка видео, фото контента
          </h4>
        </div>
        <!--        <div class="d-none d-md-block">-->
        <!--          <button class="btn btn-sm pd-x-15 btn-white btn-uppercase">-->
        <!--            Save-->
        <!--          </button>-->
        <!--          <button class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5">-->
        <!--            Export-->
        <!--          </button>-->
        <!--          <button class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5">-->
        <!--            Share-->
        <!--          </button>-->
        <!--          <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5">-->
        <!--            Settings-->
        <!--          </button>-->
        <!--        </div>-->
      </div>
      <div class="col-md-12">
        <div class="card">
          <div class="card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25">
            <div class="row">
              <div class="col-md-3 mb-2">
                <div class="mb-3 custom-file">
                  <label for="formFile" class="form-label custom-file-label">Выберите файл</label>
                  <input
                    id="formFile"
                    class="form-control custom-file-input"
                    type="file"
                    style="width: 300px; overflow-x: hidden"
                    @change="selectFile"
                  >
                </div>
                <div>
                  <i class="fad fa-file" />
                  <span class="font-weight-bold">{{ (ads && ads.file && ads.file.name || '') }}</span>
                </div>
              </div>
              <div class="col-md-2 mb-4">
                <b-form-group
                  description="Продолжительность показа в минутах только для картинок"
                  class="mb-0"
                >
                  <b-form-input
                    v-model="ads.duration"
                    placeholder="Минуты"
                  />
                </b-form-group>
              </div>
              <div class="col-md-4">
                <div class="btn-group mg-t-20 mg-sm-t-0">
                  <button class="btn btn-white btn-uppercase" @click="uploadFile">
                    <i class="fad fa-cloud-upload" />
                    Загрузить
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
                    №
                  </td>
                  <td>
                    Тип файла
                  </td>
                  <td>
                    Имя файла
                  </td>
                  <td>
                    Длительность показа мин.
                  </td>
                  <td>
                    #
                  </td>
                </tr>
              </thead>
              <tbody>
                <template v-for="(adsItem, index) in adsLists">
                  <tr :key="adsItem.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ adsItem.type }}</td>
                    <td>{{ adsItem.name }}</td>
                    <td>{{ adsItem.duration }}</td>
                    <td>
                      <button type="button" class="btn btn-xs btn-outline-danger" @click="deleteAds(adsItem)">
                        <i class="fad fa-trash" />
                      </button>
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
export default {
  data () {
    return {
      ads: {
        file: {},
        department: '',
        duration: null
      },
      adsLists: []
    }
  },
  async mounted () {
    await this.getAds()
  },
  methods: {
    selectFile ($event) {
      const files = $event.target.files
      this.ads.file = files[0]
    },

    async getAds () {
      const adsApi = this.$api.getApi('adsApi')
      this.adsLists = await adsApi.getAds()
    },

    async uploadFile () {
      if (this.ads && this.ads.file && !this.ads.file.name) {
        await this.$store.dispatch('toast/toastDanger', {
          message: 'Пожалуйста виберите файл'
        })
        return
      }
      const formData = new FormData()
      formData.append('fileName', this.ads.file.name)
      formData.append('file', this.ads.file)
      formData.append('duration', this.ads.duration)

      const api = this.$api.getApi('adsApi')
      try {
        this.$nuxt.$loading.start()
        const response = await api.uploadFile(formData)
        if (response) {
          await this.$store.dispatch('toast/toastSuccess', {
            message: 'Медиа контент успешно загружен'
          })
          this.toClearForm()
          await this.getAds()
        }
      } catch (e) {
        await this.$store.dispatch('toast/toastDanger', {
          message: 'Не удалось загрузить медиа'
        })
      }
      this.$nuxt.$loading.finish()
    },
    async deleteAds (ads) {
      const adsApi = this.$api.getApi('adsApi')
      const answer = await this.$store.dispatch('modal/confirmDelete')
      if (answer) {
        const deleted = await adsApi.deleteAdsById(ads.id)
        if (deleted && deleted.success) {
          await this.$store.dispatch('toast/toastSuccess', {
            message: 'Медиа контент успешно удален'
          })
          await this.getAds()
        } else {
          await this.$store.dispatch('toast/toastDanger', {
            message: 'Невозможно удалить медиа контент возможно файл воспроизводится телевизором'
          })
          await this.getAds()
        }
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
