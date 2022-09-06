import { createI18n } from 'vue-i18n'
import zhCN from '../locales/zh-CN.json'

const messages = {
  'zh-CN': zhCN,
}

const locales = Object.keys(messages)

const createI18nWithLocale = (locale: string): any => {
  return createI18n({
    legacy: false,
    locale,
    messages,
  })
}
export { messages, locales, createI18nWithLocale }
