export default {
  name: 'file',
  apiName: 'fileApi',
  routeName: 'files',
  paginate: 'server',

  fields: [
    {
      type: 'text',
      key: 'file_title',
      label: 'file.label.file_title',
      placeholder: 'file.placeholder.file_title',
      description: 'file.description.file_title',
      col: {
        sm: 12,
        xs: 12,
        md: 6,
        lg: 6,
        xl: 6
      }
    },
    {
      type: 'file',
      key: 'file',
      label: 'file.label.file',
      placeholder: 'file.placeholder.file',
      dropPlaceholder: 'file.placeholder.dropFile',
      description: 'file.description.file',
      col: {
        sm: 12,
        xs: 12,
        md: 6,
        lg: 6,
        xl: 6
      }
    },
    {
      type: 'textarea',
      key: 'file_desc',
      label: 'file.label.file_desc',
      placeholder: 'file.placeholder.file_desc',
      description: 'file.description.file_desc',
      col: {
        sm: 12,
        xs: 12,
        md: 6,
        lg: 6,
        xl: 9
      }
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
