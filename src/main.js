import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import './assets/all.scss'

const app = createApp(App)

app.component('loadingVue', Loading)

app.use(VueAxios, axios)

app.use(router)
app.mount('#app')
