import crud from '@/data/crud'

export default {
  data () {
    return {
      perPage: 10,
      records: [],
      recordsChunks: [],
      currentPage: 1,
      totalRows: 0,
      withParams: {},
      crud,
      response: {}
    }
  },
  computed: {
    fields () {
      return this.currentCrud.fields
    },
    currentCrud () {
      return this.crud[this.crudName] || {}
    },
    api () {
      return this.$api.getApi(this.currentCrud.apiName) || {}
    }
  },
  methods: {
    removeRecordById (id, records) {
      return this.$removeItemFromObjectArray(id, 'id', records)
    },
    removeRecordBy (params = {}, records = []) {
      if (records && Array.isArray(records) && records.length) {
        return records.filter((record) => {
          const keys = Object.keys(params)
          if (keys && Array.isArray(keys) && keys.length) {
            const filteredKeys = keys.filter((key) => {
              return record[key] !== params[key]
            })
            return filteredKeys.length >= 1
          }
          return false
        })
      }
      return []
    },

    async getData ({ page, perPage, ...params }) {
      if (this.currentCrud.paginate === 'client') {
        const response = await this.$store.dispatch('api/getDataClientside', {
          chunks: this.recordsChunks,
          crudName: this.crudName,
          page,
          perPage,
          params
        })
        if (!this.recordsChunks.length) {
          this.recordsChunks = response.chunks
          this.totalRows = response.total
          this.perPage = response.perPage
          this.currentPage = response.page
        }
        this.records = response.data
        this.response = response
        return
      }
      try {
        const response = await this.$store.dispatch('api/getData', {
          crudName: this.crudName,
          page,
          perPage,
          ...params
        })
        if (response && response.data) {
          this.currentPage = response.current_page
          this.records = response.data
          this.totalRows = response.total
          this.perPage = response.per_page
          this.response = response
        }
      } catch (e) {}
    },

    async create ({ data, apiConfig = {}, crud = {} }) {
      const apiName = crud.apiName || this.currentCrud.apiName
      const api = this.$api.getApi(apiName)
      try {
        const response = await api.create(data, { ...apiConfig })
        if (response && response.success) {
          await this.$store.dispatch('toast/toastSuccess', {
            message: response.message || this.$i18n.t('rest.create.success')
          })
        }
        return response
      } catch (e) {
        await this.$store.dispatch('toast/toastDanger', {
          message: this.$i18n.t('rest.create.error')
        })
        return {
          success: false,
          error: e
        }
      }
    },
    async update ({ data, apiConfig = {}, crud = {} }) {
      const apiName = crud.apiName || this.currentCrud.apiName
      const api = this.$api.getApi(apiName)
      try {
        const response = await api.update(data, {
          ...apiConfig
        })
        if (response && response.success) {
          await this.$store.dispatch('toast/toastSuccess', {
            message: response.message || this.$i18n.t('rest.update.success')
          })
        }
        return response
      } catch (e) {
        await this.$store.dispatch('toast/toastDanger', {
          message: this.$i18n.t('rest.update.error')
        })
        return {
          success: false,
          error: e
        }
      }
    },
    async delete ({ data = {}, apiConfig = {}, crud = {} }) {
      const apiName = crud.apiName || this.currentCrud.apiName
      const api = this.$api.getApi(apiName)
      try {
        const response = await api.delete(data, apiConfig)
        if (response && response.success) {
          await this.$store.dispatch('toast/toastSuccess', {
            message: response.message || this.$i18n.t('rest.delete.success')
          })
        }
        return response
      } catch (e) {
        await this.$store.dispatch('toast/toastDanger', {
          message: this.$i18n.t('rest.delete.error')
        })
        return {
          success: false,
          error: e
        }
      }
    },
    async id ({ id, apiConfig, crud }) {
      const apiName = crud.apiName || this.currentCrud.apiName
      const api = this.$api.getApi(apiName)
      try {
        return await api.id(id, { ...apiConfig })
      } catch (e) {
        return {
          success: false,
          error: e
        }
      }
    },
    async all ({ data, apiConfig = {}, crud = {} }) {
      const apiName = crud.apiName || this.currentCrud.apiName
      const api = this.$api.getApi(apiName)
      try {
        return await api.all({ ...apiConfig })
      } catch (e) {
        return {
          success: false,
          error: e
        }
      }
    }
  }
}
