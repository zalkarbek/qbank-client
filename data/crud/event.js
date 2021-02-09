export default {
  name: 'event',
  apiName: 'eventApi',
  routeName: 'events',
  paginate: 'server',

  fields: [
    {
      type: 'text',
      key: 'event_title',
      label: 'event.label.event_title',
      placeholder: 'event.placeholder.event_title',
      description: 'event.description.event_title'
    },
    {
      type: 'textarea',
      key: 'event_content',
      label: 'event.label.event_content',
      placeholder: 'event.placeholder.event_content',
      description: 'event.description.event_content'
    },
    {
      type: 'text',
      key: 'event_image_url',
      label: 'event.label.event_image_url',
      placeholder: 'event.placeholder.event_image_url',
      description: 'event.description.event_image_url'
    },
    {
      type: 'datetime',
      key: 'event_start',
      label: 'event.label.event_start',
      placeholder: 'event.placeholder.event_start',
      description: 'event.description.event_start'
    },
    {
      type: 'datetime',
      key: 'event_end',
      label: 'event.label.event_end',
      placeholder: 'event.placeholder.event_end',
      description: 'event.description.event_end'
    },
    {
      type: 'json',
      key: 'event_options',
      label: 'event.label.event_options',
      placeholder: 'event.placeholder.event_options',
      description: 'event.description.event_options',
      disabled: true
    },
    {
      type: 'select',
      key: 'author',
      label: 'event.label.event_author_id',
      placeholder: 'event.placeholder.event_author_id',
      description: 'event.description.event_author_id',
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
