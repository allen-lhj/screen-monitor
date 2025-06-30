import BinDatav from 'bin-datav'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bin-datav/lib/styles/index.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BinDatav)

app.mount('#app')
