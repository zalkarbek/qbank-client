import colors from '@/config/colors'
import i18nConfig from '@/config/i18n'
import dateConfig from '@/config/date'
import fieldTypes from '@/data/fieldTypes'
import crud from '~/data/crud'

export default () => ({
  crud,
  crudNames: Object.keys(crud),
  token: '',
  logged: false,
  socks: {},
  socketOpenedConnects: [],
  socketOpenedRooms: [],
  countries: [],
  cities: [],
  colors,
  fieldTypes,
  defaultLocale: i18nConfig.defaultLocale,
  currentLocale: i18nConfig.currentLocale,
  supportedLocales: i18nConfig.supportedLocales,
  dateSwitchLocales: i18nConfig.dateSwitchLocales,
  dateFormats: dateConfig.dateFormats,
  currentDepartment: {}
})
