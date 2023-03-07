import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default defineStore('productsStore', {
  // data, methods, computed
  // state, actions, getters
  state: () => ({
    products: []
  }),
  actions: {
    getProducts () {
      axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
        })
        .catch((error) => {
          console.dir(error)
        })
    }
  },
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a, b) => a.price - b.price)
    }
  }
})
