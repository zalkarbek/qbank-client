export default [
  {
    text: 'Башкы бет',
    to: '/',
    icon: ''
  },

  {
    text: 'Долбоорлор',
    to: '/projects',
    icon: ''
  },

  {
    text: 'Жаңылыктар',
    to: '/news',
    icon: ''
  },

  {
    text: 'Кызматтар',
    to: '/services',
    icon: ''
  },

  {
    text: 'Шаардык кеңеш',
    to: '/city-concil',
    icon: '',
    children: [
      {
        text: 'Чогулуштар',
        to: '/meetings',
        icon: ''
      },
      {
        text: 'Токтомдор',
        to: '/meetings',
        icon: ''
      },
      {
        text: 'Депутаттар',
        to: '/deputy',
        icon: ''
      }
    ]
  },

  {
    text: 'Шаар жөнүндө',
    to: '/city/about',
    icon: ''
  },
  {
    text: 'Департамент',
    to: '/departments',
    icon: '',
    children: [
      {
        text: 'Тазалык',
        to: '/cleanliness',
        icon: ''
      },
      {
        text: 'Архитектура',
        to: '/architecture',
        icon: ''
      },
      {
        text: 'Таза-суу',
        to: '/clean-water',
        icon: ''
      }
    ]
  }
]
