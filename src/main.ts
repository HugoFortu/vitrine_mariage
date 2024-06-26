import './assets/main.css'
import 'tailwindcss/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Countdown from 'vue3-flip-countdown'
import router from './router'

const app = createApp(App).use(Countdown)

app.use(createPinia())
app.use(router)

app.mount('#app')
