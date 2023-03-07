import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('lang'),
  fallbackLocale: 'en',
  availableLocales: ['en', 'pt_BR'],
  messages: messages,
})
