export default {
  name: 'department',
  apiName: 'departmentApi',
  routeName: 'departments',
  paginate: 'server',

  fields: [
    {
      type: 'text',
      key: 'department_name',
      label: 'department.label.department_name',
      placeholder: 'department.placeholder.department_name',
      description: 'department.description.department_name'
    },
    {
      type: 'textarea',
      key: 'department_content',
      label: 'department.label.department_content',
      placeholder: 'department.placeholder.department_content',
      description: 'department.description.department_content'
    },
    {
      type: 'textarea',
      key: 'department_desc',
      label: 'department.label.department_desc',
      placeholder: 'department.placeholder.department_desc',
      description: 'department.description.department_desc'
    },
    {
      type: 'text',
      key: 'department_image_url',
      label: 'department.label.department_image_url',
      placeholder: 'department.placeholder.department_image_url',
      description: 'department.description.department_image_url'
    },
    {
      type: 'json',
      key: 'department_options',
      label: 'department.label.department_options',
      placeholder: 'department.placeholder.department_options',
      description: 'department.description.department_options',
      disabled: true
    },
    {
      type: 'select',
      key: 'parent',
      label: 'department.label.department_parent_id',
      placeholder: 'department.placeholder.department_parent_id',
      description: 'department.description.department_parent_id',
      foreign_crud: 'department',
      foreign_label: 'department_name',
      foreign_request_body: {
        filters: [],
        orders: [],
        columns: ['department_name', 'id']
      },
      foreign_request_query: {}
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
