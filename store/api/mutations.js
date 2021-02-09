export default {
  DATASET_INIT (state, { datasetName }) {
    state.datasets[datasetName] = []
  },
  DATASET_FLUSH (state, { datasetName }) {
    state.datasets[datasetName] = []
  },
  DATASET_SET (state, { datasetName, datalist }) {
    state.datasets[datasetName] = datalist
  },
  DATASET_PUSH (state, { datasetName, data }) {
    if (!state.datasets[datasetName]) {
      state.datasets[datasetName] = []
    }
    state.datasets[datasetName].push(data)
  },
  DATASET_PUSH_FIRST (state, { datasetName, data }) {
    if (!state.datasets[datasetName]) {
      state.datasets[datasetName] = []
    }
    state.datasets[datasetName] = [data, ...state.datasets[datasetName]]
  },
  DATASET_UPDATE_BY_ID (state, { datasetName, id, data }) {
    const elementIndex = this.$lo.findIndex(state.datasets[datasetName], {
      id
    })
    if (elementIndex >= 0) {
      state.datasets[datasetName][elementIndex] = data
    }
  },
  DATASET_REMOVE_ITEM (state, { datasetName, data }) {
    const dataset = state.dataset[datasetName]
    if (dataset) {
      dataset.splice(dataset.indexOf(data), 1)
    }
  },
  CRUD_FIELDS_REPLACE_ALL (state, { crud, fields = [] }) {
    crud.fields = fields
  },

  CRUD_FIELDS_REPLACE (state, { crud, oldField, newField }) {
    const oldIndex = crud.fields.indexOf(oldField)
    if (oldIndex !== -1) {
      crud.fields[oldIndex] = newField
    }
  },

  CRUD_FIELDS_JSON_REPLACE (state, { field, json }) {
    field.json = json
  },

  CRUD_FIELDS_PUSH (state, { crud, field }) {
    crud.fields.push(field)
  }
}
