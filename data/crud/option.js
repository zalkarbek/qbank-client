export default {
  name: 'option',
  apiName: 'optionApi',
  routeName: 'options',
  paginate: 'server',

  fields: [
    {
      type: 'text',
      key: 'opt_key',
      label: 'option.label.opt_key',
      placeholder: 'option.placeholder.opt_key',
      description: 'option.description.opt_key'
    },
    {
      type: 'text',
      key: 'opt_value',
      label: 'option.label.opt_value',
      placeholder: 'option.placeholder.opt_value',
      description: 'option.description.opt_value'
    },
    {
      type: 'textarea',
      key: 'opt_desc',
      label: 'option.label.opt_desc',
      placeholder: 'option.placeholder.opt_desc',
      description: 'option.description.opt_desc'
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
