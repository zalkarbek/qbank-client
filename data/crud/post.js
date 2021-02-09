export default {
  name: 'post',
  apiName: 'postApi',
  routeName: 'posts',
  paginate: 'server',
  fields: [
    {
      type: 'text',
      key: 'post_title',
      label: 'post.label.post_title',
      placeholder: 'post.placeholder.post_title',
      description: 'post.description.post_title',
      col: {
        sm: 12,
        xs: 12,
        md: 12,
        lg: 12,
        xl: 12
      }
    },
    {
      type: 'text',
      key: 'post_image_url',
      label: 'post.label.post_image_url',
      placeholder: 'post.placeholder.post_image_url',
      description: 'post.description.post_image_url',
      col: {
        sm: 12,
        xs: 12,
        md: 12,
        lg: 12,
        xl: 12
      }
    },
    {
      type: 'select',
      key: 'category',
      label: 'post.label.post_category_id',
      placeholder: 'post.placeholder.post_category_id',
      description: 'post.description.post_category_id',
      foreign_crud: 'postCategory',
      foreign_label: 'post_category_name',
      // foreign_value: 'id',
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
    },

    {
      type: 'multi-select-tag',
      key: 'tags',
      label: 'post.label.post_tags',
      placeholder: 'post.placeholder.post_tags',
      description: 'post.description.post_tags',
      foreign_crud: 'tag',
      foreign_label: 'name',
      foreign_value: 'id',
      foreign_request_body: {
        filters: [],
        orders: [],
        columns: ['name', 'id']
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
      type: 'textarea',
      key: 'post_content',
      label: 'post.label.post_content',
      placeholder: 'post.placeholder.post_content',
      description: 'post.description.post_content',
      col: {
        sm: 12,
        xs: 12,
        md: 12,
        lg: 12,
        xl: 12
      }
    },

    {
      type: 'textarea',
      key: 'post_small_content',
      label: 'post.label.post_small_content',
      placeholder: 'post.placeholder.post_small_content',
      description: 'post.description.post_small_content',
      col: {
        sm: 12,
        xs: 12,
        md: 12,
        lg: 12,
        xl: 12
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
        type: 'number',
        key: 'id',
        label: 'post.label.id'
      },
      {
        type: 'text',
        key: 'post_title',
        label: 'post.label.post_title'
      },
      {
        type: 'select',
        key: 'post_category_id',
        label: 'post.label.post_category_id',
        hidden: true
      },
      {
        type: 'select',
        key: 'category',
        label: 'post.label.post_category'
      }
    ],
    actionButtons: [
      {
        name: 'postVisibleButton',
        event: 'on-post-visible',
        variant: 'teal',
        class: 'bg-indigo',
        textBaseClass: 'text-white',
        icon: 'eye'
      }
    ]
  }

}

// has: [
//   {
//     rel: 'category',
//     filters: [
//       {
//         column: 'id',
//         op: '=',
//         value: 2
//       }
//     ]
//   }
// ],
