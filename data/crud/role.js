export default {
  name: 'role',
  apiName: 'roleApi',
  routeName: 'roles',
  paginate: 'client',

  fields: [
    {
      type: 'text',
      key: 'role_name',
      label: 'role.label.role_name',
      placeholder: 'role.placeholder.role_name',
      description: 'role.description.role_name'
    },
    {
      type: 'text',
      key: 'role_key',
      label: 'role.label.role_key',
      placeholder: 'role.placeholder.role_key',
      description: 'role.description.role_key'
    },
    {
      type: 'number',
      key: 'role_priority',
      label: 'role.label.role_priority',
      placeholder: 'role.placeholder.role_priority',
      description: 'role.description.role_priority'
    },
    {
      type: 'switch',
      key: 'role_active',
      label: 'role.label.role_active',
      placeholder: 'role.placeholder.role_active',
      description: 'role.description.role_active',
      checked_value: 1,
      unchecked_value: 0
    },
    {
      type: 'textarea',
      key: 'role_desc',
      label: 'role.label.role_desc',
      placeholder: 'role.placeholder.role_desc',
      description: 'role.description.role_desc'
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
