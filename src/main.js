import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'

import './assets/css/main.css'

import { i18n } from './plugins/i18n'

const app = createApp(App)
const head = createHead()

app.use(router)

app.use(head)
app.use(i18n)

app.mount('#app')
