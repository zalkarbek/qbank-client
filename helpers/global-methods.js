import _ from 'lodash'
export default {
  toLowerCase (text) {
    return _.toLower(text)
  },
  firstLetter (text = '') {
    return (text && text[0]) || ''
  },
  lastLetter (text = '') {
    return (text && text[text.length - 1]) || ''
  },
  randomInt (length = 10) {
    return Math.round(Math.random() * length)
  },
  removeItemFromArray (needle, heystack) {
    const query = _.toLower(needle)
    return heystack.filter(item => !_.toLower(item).includes(query))
  },
  removeItemFromObjectArray (needle, key, heystack) {
    const query = _.toLower(needle)
    let columns = []
    if (key && Array.isArray(key)) {
      columns = [...key]
      return heystack.filter((item) => {
        let condition = false
        columns.forEach((col) => {
          condition = condition || !_.toLower(item[col]).includes(query)
        })
        return condition
      })
    }
    return heystack.filter(item => !_.toLower(item[key]).includes(query))
  },
  filterArrayItems (needle, heystack) {
    const query = _.toLower(needle)
    return heystack.filter(item => _.toLower(item).includes(query))
  },
  filterObjectArray (needle, key, heystack) {
    const query = _.toLower(needle)
    let columns = []
    if (key && Array.isArray(key)) {
      columns = [...key]
      return heystack.filter((item) => {
        let condition = false
        columns.forEach((col) => {
          condition = condition || _.toLower(item[col]).includes(query)
        })
        return condition
      })
    }
    return heystack.filter(item => _.toLower(item[key]).includes(query))
  },
  getPaginationFromData ({ data = [], page = 1, perPage = 10 }) {
    if (data && data.length >= 1) {
      const chunked = _.chunk(data, perPage)
      const length = chunked.length
      const totalRows = data.length
      if (length >= page) {
        return { data: chunked[page - 1], chunks: chunked, total: totalRows }
      } else if (length <= page) {
        return { data: chunked[length - 1], chunks: chunked, total: totalRows }
      }
    }
    return { data: [], chunks: [], total: 0 }
  },
  getPageFromPaginationData ({ chunks = [], page = 1 }) {
    if (chunks && chunks.length >= 1) {
      const length = chunks.length
      if (length >= page) {
        return { data: chunks[page - 1], chunks }
      } else if (length <= page) {
        return { data: chunks[length - 1], chunks }
      }
    }
    return { data: [], total: 0 }
  }

}
