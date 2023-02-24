import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import './assets/all.scss'
import { date } from './methods/filters'

import CKEditor from '@ckeditor/ckeditor5-vue'

const app = createApp(App)
app.config.globalProperties.$filters = {
  date
}

app.component('loadingVue', Loading)

app.use(VueAxios, axios)
// CKEditor
app.use(CKEditor)

app.use(router)
app.mount('#app')
