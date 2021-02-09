export default {
  name: 'slider',
  apiName: 'sliderApi',
  routeName: 'sliders',
  paginate: 'client',

  fields: [
    {
      type: 'text',
      key: 'slider_name',
      label: 'slider.label.slider_name',
      placeholder: 'slider.placeholder.slider_name',
      description: 'slider.description.slider_name'
    },
    {
      type: 'text',
      key: 'slider_position',
      label: 'slider.label.slider_position',
      placeholder: 'slider.placeholder.slider_position',
      description: 'slider.description.slider_position'
    },
    {
      type: 'switch',
      key: 'slider_visible',
      label: 'slider.label.slider_visible',
      placeholder: 'slider.placeholder.slider_visible',
      description: 'slider.description.slider_visible',
      checked_value: 1,
      unchecked_value: 0
    },
    {
      type: 'multi-select',
      key: 'items',
      label: 'slider.label.items',
      placeholder: 'slider.placeholder.items',
      description: 'slider.description.items'
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
