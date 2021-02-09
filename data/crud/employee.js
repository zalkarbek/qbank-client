export default {
  name: 'employee',
  apiName: 'EmployeeApi',
  routeName: 'employees',
  paginate: 'client',

  fields: [
    {
      type: 'text',
      key: 'employee_first_name',
      label: 'lang.label.lang_name',
      placeholder: 'lang.placeholder.lang_name',
      description: 'lang.description.lang_name'
    },
    {
      type: 'text',
      key: 'employee_last_name',
      label: 'lang.label.lang_locale',
      placeholder: 'lang.placeholder.lang_locale',
      description: 'lang.description.lang_locale'
    },
    {
      type: 'textarea',
      key: 'employee_data',
      label: 'lang.label.employee_data',
      placeholder: 'lang.placeholder.employee_data',
      description: 'lang.description.employee_data'
    },
    {
      type: 'json',
      key: 'employee_options',
      label: 'lang.label.employee_options',
      placeholder: 'lang.placeholder.employee_options',
      description: 'lang.description.employee_options',
      disabled: true
    },
    {
      type: 'select',
      key: 'user',
      label: 'lang.label.employee_user_id',
      placeholder: 'lang.placeholder.employee_user_id',
      description: 'lang.description.employee_user_id',
      foreign_crud: 'user',
      foreign_label: 'user_name',
      foreign_request_body: {
        filters: [],
        orders: [],
        columns: ['user_name', 'id']
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
