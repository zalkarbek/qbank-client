export default {
  name: 'postCategory',
  apiName: 'postCategoryApi',
  routeName: 'posts-categories',
  paginate: 'client',

  fields: [
    {
      type: 'text',
      key: 'post_category_name',
      label: 'postCategory.label.post_category_name',
      placeholder: 'postCategory.placeholder.post_category_name',
      description: 'postCategory.description.post_category_name'
    },
    {
      type: 'switch',
      key: 'post_category_visible',
      label: 'postCategory.label.post_category_visible',
      placeholder: 'postCategory.placeholder.post_category_visible',
      description: 'postCategory.description.post_category_visible',
      checked_value: true,
      unchecked_value: false
    },

    {
      type: 'select',
      key: 'parent',
      label: 'postCategory.label.post_category_parent_id',
      placeholder: 'postCategory.placeholder.post_category_parent_id',
      description: 'postCategory.description.post_category_parent_id',
      foreign_crud: 'postCategory',
      foreign_label: 'post_category_name',
      foreign_request_body: {
        filters: [],
        orders: [],
        columns: ['post_category_name', 'id']
      },
      foreign_request_query: {},
      col: {
        sm: 12,
        xs: 12,
        md: 12,
        lg: 6,
        xl: 6
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
    fields: [],
    actionButtons: []
  }
}
