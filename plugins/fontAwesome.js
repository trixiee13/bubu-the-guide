module.exports = {
  config: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faAngleLeft',
          'faAngleRight',
          'faMapMarkerAlt',
          'faClock'
        ]
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['faBookmark']
      }
    ]
  }
}