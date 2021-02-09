import methods from '@/helpers/global-methods'

export default (context, inject) => {
  inject('filterArrayItems', methods.filterArrayItems)
  inject('filterObjectArray', methods.filterObjectArray)
  inject('removeItemFromArray', methods.removeItemFromArray)
  inject('removeItemFromObjectArray', methods.removeItemFromObjectArray)
  inject('randomInt', methods.randomInt)
  inject('toLowerCase', methods.toLowerCase)
  inject('firstLetter', methods.firstLetter)
  inject('lastLetter', methods.lastLetter)
  inject('getPaginationFromData', methods.getPaginationFromData)
  inject('getPageFromPaginationData', methods.getPageFromPaginationData)
}
