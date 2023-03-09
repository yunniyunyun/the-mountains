import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
import loadingStore from './loadingStore.js'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const { loadingTrue, loadingFalse } = loadingStore()

export default defineStore('productsStore', {
  // data, methods, computed
  // state, actions, getters
  state: () => ({
    products: [],
    pages: {}
  }),
  actions: {
    getProducts (page = 1) {
      loadingTrue()
      axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.pages = res.data.pagination
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
    getAllProducts () {
      loadingTrue()
      axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          loadingFalse()
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
          loadingFalse()
        })
    }
  },
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a, b) => a.price - b.price)
    },
    hotProducts: ({ products }) => {
      return products.filter(item => item?.is_hot === 1)
    },
    latestProducts: ({ products }) => {
      return products.sort((a, b) => a.create_at - b.create_at).slice(0, 5)
    }
  }
})
