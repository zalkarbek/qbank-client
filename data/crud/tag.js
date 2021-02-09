export default {
  name: 'tag',
  apiName: 'tagApi',
  routeName: 'tags',
  paginate: 'client',
  fields: [
    {
      type: 'text',
      key: 'name',
      label: 'tag.label.name',
      placeholder: 'tag.placeholder.name',
      description: 'tag.description.name'
    }
  ],
  actionButtons: [],

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
    fields: [
      {
        type: 'text',
        key: 'name',
        label: 'tag.label.name'
      }
    ],
    actionButtons: []
  }
}
