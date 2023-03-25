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
    pages: {},
    categories: [],
    tempCatrgory: '全部行程'
  }),
  actions: {
    getCategories () {
      axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          const products = res.data.products
          const categories = products.map((item) => {
            return item.category
          })
          const categoriesList = [...new Set(categories)]
          this.categories = ['全部行程', ...categoriesList]
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: error.response.data.message
          })
        })
    },
    changeCategory (category) {
      this.tempCatrgory = category
    },
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
    },
    sortProduct (isSort = true) {
      console.log('this.changeProducts', this.changeProducts)
      if (isSort) {
        this.changeProducts.sort((a, b) => a.create_at - b.create_at)
        console.log(this.changeProducts)
      } else {
        this.changeProducts.sort((a, b) => b.create_at - a.create_at)
        console.log(this.changeProducts)
      }
    }
  },
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a, b) => a.price - b.price)
    },
    homeProducts: ({ products }) => {
      return products.filter(item => item?.is_home === 1)
    },
    hotProducts: ({ products }) => {
      return products.filter(item => item?.is_hot === 1)
    },
    hotHomeProducts: ({ products }) => {
      return products.filter(item => item?.is_hot === 1).slice(0, 4)
    },
    latestProducts: ({ products }) => {
      return products.sort((a, b) => a.create_at - b.create_at).slice(0, 5)
    },
    randomProducts: ({ products }) => {
      return products.sort(() => 0.5 - Math.random()).slice(0, 3)
    },
    changeProducts: ({ tempCatrgory, products }) => {
      if (tempCatrgory === '全部行程') {
        return products
      } else {
        return products.filter(product => product.category === tempCatrgory)
      }
    }
  }
})
