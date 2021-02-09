export default {
  get (ctx, { url, params }) {
    return this.$api.get(url, params)
  },
  post (ctx, { url, data }) {
    return this.$api.post(url, data)
  },
  put (ctx, { url, data }) {
    return this.$api.put(url, data)
  },
  delete (ctx, { url, params }) {
    return this.$api.delete(url, params)
  },
  async datasetRequest (
    { state, dispatch, commit },
    { datasetName, data = {}, params = {}, config = {} }
  ) {
    if (!state.datasets[datasetName] || !state.datasets[datasetName].length) {
      try {
        const crud = state.crud[datasetName]
        const api = this.$api.getApi(crud.apiName)
        const response = await api.get(data, { ...config, params })
        let datalist = []
        if (response && Array.isArray(response)) {
          datalist = response
        }
        if (response && response.data && Array.isArray(response.data)) {
          datalist = response.data
        }
        if (response && response) {
          commit('DATASET_SET', { datasetName, datalist })
        }
      } catch (e) {}
    }
    return state.datasets[datasetName]
  },
  async datasetStore (
    { state, dispatch, commit },
    { datasetName, data = {}, params = {}, config = {} }
  ) {
    try {
      const crud = state.crud[datasetName]
      const api = this.$api.getApi(crud.apiName)
      const response = await api.create({ data }, { ...config, params })
      if (response && response.success) {
        dispatch('datasetPush', { datasetName, data: response.data })
      }
      return response.data
    } catch (e) {
      return null
    }
  },
  datasetSet ({ commit }, { datasetName, datalist }) {
    commit('DATASET_SET', { datasetName, datalist })
  },
  datasetPush ({ commit }, { datasetName, data }) {
    commit('DATASET_PUSH', { datasetName, data })
  },
  datasetPushFirst ({ commit }, { datasetName, data }) {
    commit('DATASET_PUSH_FIRST', { datasetName, data })
  },
  datasetUpdateById ({ commit }, { datasetName, id, data }) {
    commit('DATASET_UPDATE_BY_ID', { datasetName, id, data })
  },
  datasetRemoveItem ({ commit }, { data, datasetName }) {
    commit('DATASET_REMOVE_ITEM', { data, datasetName })
  },
  datasetGet ({ state }, { datasetName }) {
    return state.datasets[datasetName]
  },
  datasetGetPaginate (
    { state },
    { datasetName, page = 1, perPage = 10 }
  ) {
    const dataset = state.datasets[datasetName]
    if (dataset && dataset.length >= 1) {
      const chunked = this.$lo.chunk(dataset, perPage)
      const length = chunked.length
      const totalRows = dataset.length
      if (length >= page) {
        return { data: chunked[page - 1], chunks: chunked, total: totalRows }
      } else if (length <= page) {
        return { data: chunked[length - 1], chunks: chunked, total: totalRows }
      }
    }
    return { data: [], chunks: [], total: 0 }
  },

  datasetFind ({ state }, { datasetName, columnName, query }) {
    const dataset = state.datasets[datasetName]
    if (dataset && dataset.length >= 1) {
      return this.$filterObjectArray(query, columnName, dataset)
    }
    return []
  },

  datasetFindElement ({ state }, { datasetName, columnName, value }) {
    const dataset = state.datasets[datasetName]
    if (dataset && dataset.length >= 1) {
      return dataset.find((item) => {
        return item[columnName] === value
      })
    }
    return {}
  },

  async getDataClientside ({ state }, { chunks, crudName, params, page = 1, perPage = 10 }) {
    let paginated
    if (chunks && Array.isArray(chunks) && chunks.length >= 1) {
      paginated = this.$getPageFromPaginationData({
        chunks,
        page
      })
    } else {
      const crud = state.crud[crudName]
      const api = this.$api.getApi(crud.apiName)
      const response = await api.get(params)

      paginated = this.$getPaginationFromData({
        data: response,
        page,
        perPage
      })
    }
    return {
      ...paginated,
      page,
      perPage
    }
  },
  async getData ({ state }, { crudName, page, perPage, ...params }) {
    const crud = state.crud[crudName]
    const api = this.$api.getApi(crud.apiName)
    try {
      return await api.get({
        page,
        perPage,
        ...params
      })
    } catch (e) {}
  }

}
