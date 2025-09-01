import 'i18next'

declare module 'i18next' {
  interface CustomTypeOptions {
    enableSelector: 'optimize'
    defaultNS: 'translation'
    resources: {
      translation: {
        pkgA: 'from pkg-a'
      }
    }
  }
}
