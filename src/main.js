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

// VeeValidate
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import {
  required, email, min, numeric
} from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '../zh_TW.json'

// pinia
import { createPinia } from 'pinia'

const app = createApp(App)
app.config.globalProperties.$filters = {
  date
}
const pinia = createPinia()

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('numeric', numeric)
configure({
  // Generates an English message locale generator
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.component('loadingVue', Loading)

app.use(VueAxios, axios)
// CKEditor
app.use(CKEditor)
app.use(pinia)
app.use(router)
app.mount('#app')
