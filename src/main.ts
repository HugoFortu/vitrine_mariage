import './assets/main.css'
import 'tailwindcss/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// @ts-ignore
import App from './App.vue'
// @ts-ignore
import Countdown from 'vue3-flip-countdown'

const app = createApp(App).use(Countdown)

app.use(createPinia())

app.mount('#app')
