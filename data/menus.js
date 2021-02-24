export default [
  {
    type: 'title',
    class: 'nav-label',
    content: 'Медиа контент',
    roles: ['admin', 'media', 'director']
  },
  {
    type: 'link',
    class: 'nav-item',
    content: 'Загрузка видео/фото',
    to: '/ads',
    roles: ['admin', 'media', 'director']
  },
  {
    type: 'link',
    class: 'nav-item',
    content: 'Бегущая строка',
    to: '/ads/ticker-text',
    roles: ['admin', 'media', 'director']
  },
  {
    type: 'title',
    class: 'nav-label mg-t-25',
    content: 'Отчет за сегодня',
    roles: ['admin', 'manager', 'director']
  },
  {
    type: 'link',
    class: 'nav-item',
    content: 'За сегодня',
    to: '/turns/today',
    roles: ['admin', 'manager', 'director']
  },
  {
    type: 'link',
    class: 'nav-item',
    content: 'По сотрудникам',
    to: '/turns/operator-today-served',
    roles: ['admin', 'manager', 'director']
  },
  {
    type: 'link',
    class: 'nav-item',
    content: 'По услугам',
    to: '/turns/service-today-served',
    roles: ['admin', 'manager', 'director']
  },
  {
    type: 'title',
    class: 'nav-label mg-t-25',
    content: 'Диапазон',
    roles: ['admin', 'manager', 'director']
  },
  {
    type: 'link',
    class: 'nav-item',
    content: 'Общий список',
    to: '/turns/range-list',
    roles: ['admin', 'manager', 'director']
  },
  {
    type: 'link',
    class: 'nav-item',
    content: 'По сотрудникам',
    to: '/turns/operator-range-served',
    roles: ['admin', 'manager', 'director']
  },
  {
    type: 'link',
    class: 'nav-item',
    content: 'По услугам',
    to: '/turns/service-range-served',
    roles: ['admin', 'manager', 'director']
  },
  {
    type: 'title',
    class: 'nav-label mg-t-25',
    content: 'Сравнительный отчет',
    roles: ['admin', 'manager', 'director']
  },
  {
    type: 'link',
    class: 'nav-item',
    content: 'Сравнение',
    to: '/turns/compares',
    roles: ['admin', 'manager', 'director']
  },
  {
    type: 'title',
    class: 'nav-label mg-t-25',
    content: 'Графический отчет',
    roles: ['admin', 'manager', 'director']
  },
  {
    type: 'link',
    class: 'nav-item',
    content: 'График линейная',
    to: '/turns/graph-stream',
    roles: ['admin', 'manager', 'director']
  }
]
