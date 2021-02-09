export default {
  name: 'user',
  apiName: 'userApi',
  routeName: 'users',

  fields: [
    {
      type: 'text',
      key: 'user_name',
      label: 'user.label.user_name',
      placeholder: 'user.placeholder.user_name',
      description: 'user.description.user_name'
    },
    {
      type: 'text',
      key: 'user_email',
      label: 'user.label.user_email',
      placeholder: 'user.placeholder.user_email',
      description: 'user.description.user_email'
    },
    {
      type: 'multi-select-tag',
      key: 'roles',
      label: 'user.label.roles',
      placeholder: 'user.placeholder.roles',
      description: 'user.description.roles',
      foreign_crud: 'role',
      foreign_label: 'role_name',
      foreign_value: 'id',
      foreign_request_body: {
        filters: [],
        orders: [],
        columns: ['role_name', 'id']
      },
      foreign_request_query: {},
      col: {
        sm: 12,
        xs: 12,
        md: 12,
        lg: 6,
        xl: 6
      }
    },
    {
      type: 'switch',
      key: 'user_active',
      label: 'user.label.user_active',
      placeholder: 'user.placeholder.user_active',
      description: 'user.description.user_active',
      checked_value: 1,
      unchecked_value: 0
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
    fields: [
      {
        type: 'text',
        key: 'user_name',
        label: 'user.label.user_name'

      },
      {
        type: 'text',
        key: 'user_email',
        label: 'user.label.user_email'
      },
      {
        type: 'switch',
        key: 'user_active',
        label: 'user.label.user_active'
      }
    ],
    actionButtons: []
  },
  // модальные окна
  modals: {
    changePasswordModal: {
      fields: [
        {
          type: 'text',
          key: 'user_email',
          label: 'user.label.user_email',
          placeholder: 'user.placeholder.user_email',
          description: 'user.description.user_email'
        },
        {
          type: 'password',
          key: 'user_password',
          label: 'user.label.user_password',
          placeholder: 'user.placeholder.user_password',
          description: 'user.description.user_password'
        }
      ]
    }
  }
}
