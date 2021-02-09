export default {
  name: 'photo',
  apiName: 'photoApi',
  routeName: 'photo-gallery',
  paginate: 'server',

  fields: [
    {
      type: 'text',
      key: 'photo_title',
      label: 'photo.label.photo_title',
      placeholder: 'photo.placeholder.photo_title',
      description: 'photo.description.photo_title'
    },
    {
      type: 'textarea',
      key: 'photo_content',
      label: 'photo.label.lang_locale',
      placeholder: 'photo.placeholder.lang_locale',
      description: 'photo.description.lang_locale'
    },
    {
      type: 'boolean',
      key: 'photo_visible',
      label: 'photo.label.photo_visible',
      placeholder: 'photo.placeholder.photo_visible',
      description: 'photo.description.photo_visible'
    },
    {
      type: 'select',
      key: 'photo_author_id',
      label: 'photo.label.photo_author_id',
      placeholder: 'photo.placeholder.photo_author_id',
      description: 'photo.description.photo_author_id',
      disabled: true
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
