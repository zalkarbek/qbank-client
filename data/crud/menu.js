export default {
  name: 'menu',
  apiName: 'menuApi',
  routeName: 'menu',
  paginate: 'client',
  fields: [
    {
      type: 'text',
      key: 'menu_key',
      label: 'menu.label.menu_key',
      placeholder: 'menu.placeholder.menu_key',
      description: 'menu.description.menu_key',
      col: {
        sm: 12,
        xs: 12,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      type: 'text',
      key: 'menu_name',
      label: 'menu.label.menu_name',
      placeholder: 'menu.placeholder.menu_name',
      description: 'menu.description.menu_name',
      col: {
        sm: 12,
        xs: 12,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      type: 'text',
      key: 'menu_link',
      label: 'menu.label.menu_link',
      placeholder: 'menu.placeholder.menu_link',
      description: 'menu.description.menu_link',
      col: {
        sm: 12,
        xs: 12,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      type: 'text',
      key: 'menu_icon',
      label: 'menu.label.menu_icon',
      placeholder: 'menu.placeholder.menu_icon',
      description: 'menu.description.menu_icon',
      col: {
        sm: 12,
        xs: 12,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      type: 'text',
      key: 'menu_class',
      label: 'menu.label.menu_class',
      placeholder: 'menu.placeholder.menu_class',
      description: 'menu.description.menu_class',
      col: {
        sm: 12,
        xs: 12,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      type: 'number',
      key: 'menu_index',
      label: 'menu.label.menu_index',
      placeholder: 'menu.placeholder.menu_index',
      description: 'menu.description.menu_index',
      col: {
        sm: 12,
        xs: 12,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      type: 'text',
      key: 'menu_type',
      label: 'menu.label.menu_type',
      placeholder: 'menu.placeholder.menu_type',
      description: 'menu.description.menu_type',
      col: {
        sm: 12,
        xs: 12,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      type: 'select',
      key: 'parent',
      label: 'menu.label.parent',
      placeholder: 'menu.placeholder.parent',
      description: 'menu.description.parent',
      foreign_crud: 'menu',
      foreign_label: 'menu_name',
      // foreign_value: 'id',
      foreign_request_body: {
        filters: [],
        orders: [],
        columns: ['menu_name', 'id']
      },
      foreign_request_query: {},
      col: {
        sm: 12,
        xs: 12,
        md: 6,
        lg: 4,
        xl: 4
      }
    },
    {
      type: 'textarea',
      key: 'menu_desc',
      label: 'menu.label.menu_desc',
      placeholder: 'menu.placeholder.menu_desc',
      description: 'menu.description.menu_desc',
      col: {
        sm: 12,
        xs: 12,
        md: 6,
        lg: 4,
        xl: 4
      }
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
        key: 'menu_key',
        label: 'menu.label.menu_key'
      },
      {
        type: 'text',
        key: 'menu_name',
        label: 'menu.label.menu_name'
      },
      {
        type: 'text',
        key: 'menu_link',
        label: 'menu.label.menu_link'
      },
      {
        type: 'select',
        key: 'parent',
        label: 'menu.label.parent'
      },
      {
        type: 'textarea',
        key: 'menu_desc',
        label: 'menu.label.menu_desc'
      }
    ],
    actionButtons: []
  }
}
