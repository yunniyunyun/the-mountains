import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import axios from 'axios'
import loadingStore from './loadingStore.js'
import CartStore from './CartStore.js'
import router from '@/router'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const { loadingTrue, loadingFalse } = loadingStore()
const { getCarts } = CartStore()

export default defineStore('orderStore', {
  state: () => ({
    order: {
      user: {
        name: '',
        email: '',
        tel: '',
        address: ''
      },
      message: ''
    },
    order_data: {},
    order_id_data: {}
  }),
  actions: {
    payOrder (orderId) {
      loadingTrue()
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${orderId}`
      axios.post(url)
        .then((response) => {
          this.getOrder(this.order_id_data.id)
          Swal.fire({
            icon: 'success',
            title: '付款成功'
          })
          loadingFalse()
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
          loadingFalse()
        })
    },
    createOrder () {
      loadingTrue()
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order`
      axios.post(url, { data: this.order })
        .then((response) => {
          this.order_data = response
          this.order = {
            user: {
              name: '',
              email: '',
              tel: '',
              address: ''
            },
            message: ''
          }
          this.getOrder(this.order_data.data?.orderId)
          getCarts()
          router.push({ path: 'order' })
          loadingFalse()
        })
        .catch(() => {
          loadingFalse()
        })
    },
    getOrder (id) {
      loadingTrue()
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${id}`
      axios.get(url)
        .then((response) => {
          this.order_id_data = response.data.order
          loadingFalse()
          if (!this.order_id_data) {
            Swal.fire({
              icon: 'error',
              title: '訂單不存在'
            })
          }
        })
        .catch((error) => {
          loadingFalse()
          Swal.fire({
            icon: 'error',
            title: error.response
          })
        })
    }
  }
})
