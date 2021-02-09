export default {
  name: 'video',
  apiName: 'videoApi',
  routeName: 'videos',
  paginate: 'server',

  fields: [
    {
      type: 'text',
      key: 'video_title',
      label: 'video.label.video_title',
      placeholder: 'video.placeholder.video_title',
      description: 'video.description.video_title'
    },
    {
      type: 'text',
      key: 'video_url',
      label: 'video.label.video_url',
      placeholder: 'video.placeholder.video_url',
      description: 'video.description.video_url'
    },
    {
      type: 'select',
      key: 'video_type',
      label: 'video.label.video_type',
      placeholder: 'video.placeholder.video_type',
      description: 'video.description.video_type',
      disabled: true
    },
    {
      type: 'json',
      key: 'video_options',
      label: 'video.label.video_options',
      placeholder: 'video.placeholder.video_options',
      description: 'video.description.video_options'
    },
    {
      type: 'textarea',
      key: 'video_content',
      label: 'video.label.video_content',
      placeholder: 'video.placeholder.video_content',
      description: 'video.description.video_content'
    },
    {
      type: 'select',
      key: 'author',
      label: 'video.label.video_author_id',
      placeholder: 'video.placeholder.video_author_id',
      description: 'video.description.video_author_id',
      disabled: true
    },
    {
      type: 'boolean',
      key: 'video_visible',
      label: 'video.label.video_visible',
      placeholder: 'video.placeholder.video_visible',
      description: 'video.description.video_visible'
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
