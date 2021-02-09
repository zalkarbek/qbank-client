export default {
  name: 'page',
  apiName: 'pageApi',
  routeName: 'pages',
  paginate: 'server',

  fields: [
    {
      type: 'text',
      key: 'page_title',
      label: 'page.label.page_title',
      placeholder: 'page.placeholder.page_title',
      description: 'page.description.page_title'
    },
    {
      type: 'textarea',
      key: 'page_content',
      label: 'page.label.page_content',
      placeholder: 'page.placeholder.page_content',
      description: 'page.description.page_content'
    },
    {
      type: 'text',
      key: 'page_image_url',
      label: 'page.label.page_image_url',
      placeholder: 'page.placeholder.page_image_url',
      description: 'page.description.page_image_url'
    },
    {
      type: 'json',
      key: 'page_config',
      label: 'page.label.page_config',
      placeholder: 'page.placeholder.page_config',
      description: 'page.description.page_config',
      disabled: true
    },
    {
      type: 'select',
      key: 'user',
      label: 'page.label.page_user_id',
      placeholder: 'page.placeholder.page_user_id',
      description: 'page.description.page_user_id',
      foreign_crud: 'user',
      foreign_label: 'user_name',
      foreign_request_body: {
        filters: [],
        orders: [],
        columns: ['user_name', 'id']
      },
      foreign_request_query: {},
      disabled: true
    },
    {
      type: 'select',
      key: 'parent',
      label: 'page.label.page_parent_id',
      placeholder: 'page.placeholder.page_parent_id',
      description: 'page.description.page_parent_id',
      foreign_crud: 'page',
      foreign_label: 'page_title',
      foreign_request_body: {
        filters: [],
        orders: [],
        columns: ['page_title', 'id']
      },
      foreign_request_query: {}
    },
    {
      type: 'select',
      key: 'department',
      label: 'page.label.page_department_id',
      placeholder: 'page.placeholder.page_department_id',
      description: 'page.description.page_department_id',
      foreign_crud: 'department',
      foreign_label: 'department_name',
      foreign_request_body: {
        filters: [],
        orders: [],
        columns: ['department_name', 'id']
      },
      foreign_request_query: {}
    },
    {
      type: 'boolean',
      key: 'page_visible',
      label: 'page.label.page_visible',
      placeholder: 'page.placeholder.page_visible',
      description: 'page.description.page_visible'
    },
    {
      type: 'datetime',
      key: 'page_published_date',
      label: 'page.label.page_published_date',
      placeholder: 'page.placeholder.page_published_date',
      description: 'page.description.page_published_date',
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
