import crud from '~/data/crud'
import inputMasks from '~/data/inputMasks'
import fieldTypes from '~/data/fieldTypes'

const crudKeys = Object.keys(crud)
const datasets = {}
const datasetNames = []

crudKeys.forEach((key) => {
  datasets[key] = []
  datasetNames.push(key)
})

export default () => ({
  crud,
  datasets,
  datasetNames,
  fieldTypes,
  inputMasks
})
