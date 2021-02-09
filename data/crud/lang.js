export default {
  name: 'lang',
  apiName: 'langApi',
  routeName: 'lang',
  paginate: 'client',

  fields: [
    {
      type: 'text',
      key: 'lang_name',
      label: 'lang.label.lang_name',
      placeholder: 'lang.placeholder.lang_name',
      description: 'lang.description.lang_name'
    },
    {
      type: 'text',
      key: 'lang_locale',
      label: 'lang.label.lang_locale',
      placeholder: 'lang.placeholder.lang_locale',
      description: 'lang.description.lang_locale'
    },
    {
      type: 'text',
      key: 'lang_iso',
      label: 'lang.label.lang_iso',
      placeholder: 'lang.placeholder.lang_iso',
      description: 'lang.description.lang_iso'
    }
  ],

  formLayouts: {
    fields: [],
    actionButtons: []
  },
  listLayouts: {
    perPage: 10,
    fields: [],
    actionButtons: []
  },
  tableLayouts: {
    // при показе постов показывать или непоказывать нумерацию страниц
    numbered: false,
    perPage: 10,
    fields: [],
    actionButtons: []
  }
}
