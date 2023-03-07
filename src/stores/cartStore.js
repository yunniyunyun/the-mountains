import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      axios.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          this.getCarts()
          Swal.fire({
            background: '#0A603C',
            color: '#FFFFFF',
            width: 350,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            title: '加入購物車'
          })
        })
    },
    getCarts () {
      axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then(res => {
          this.isLoading = false
          this.cart = res.data.data
        })
    },
    updateCart (item) {
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      axios.put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then(res => {
          this.getCarts()
          this.loadingItem = ''
          Swal.fire({
            background: '#0A603C',
            color: '#FFFFFF',
            width: 350,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            title: '購物車已更新'
          })
        })
    },
    deleteCart (item) {
      this.loadingItem = item.id
      axios.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then(res => {
          this.getCarts()
          this.loadingItem = ''
          Swal.fire({
            background: '#b47978',
            color: '#FFFFFF',
            width: 350,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            title: '已刪除'
          })
        })
    },
    deleteCarts () {
      axios.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
        .then(res => {
          this.getCarts()
          this.loadingItem = ''
        })
    }
  }
})
