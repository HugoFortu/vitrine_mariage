import './assets/main.scss'
import 'tailwindcss/tailwind.css'
import 'vue-final-modal/style.css'

import { createApp } from 'vue'
import { VueFinalModal, createVfm } from 'vue-final-modal'
import { createPinia } from 'pinia'

// @ts-ignore
import App from './App.vue'
// @ts-ignore
import Countdown from 'vue3-flip-countdown'

const app = createApp(App).use(Countdown)
const vfm = createVfm()

app.use(createPinia())
app.use(vfm)
app.mount('#app')
