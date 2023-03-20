import { defineStore } from 'pinia'
// import Swal from 'sweetalert2'
// import axios from 'axios'
import productsStore from './productsStore.js'
import loadingStore from './loadingStore.js'
const { loadingTrue, loadingFalse } = loadingStore()

export default defineStore('favoriteStore', {
  state: () => ({
    favorite: []
  }),
  actions: {
    addToFavorite (productId) {
      loadingTrue()
      const cuurentFavorite = this.favorite.find((item) => item.productId === productId)
      if (!cuurentFavorite) {
        this.favorite.push({
          id: new Date().getTime(),
          date: new Date().getTime() / 1000,
          productId
        })
      }
      loadingFalse()
    },
    removeCartItem (id) {
      const index = this.favorite.findIndex((item) => item.id === id)
      this.favorite.splice(index, 1)
    }
  },
  getters: {
    favoriteList: ({ favorite }) => {
      const { products } = productsStore()

      const favoriteList = favorite.map((item) => {
        // 單一產品取出
        const product = products.find((product) => product.id === item.productId)
        return {
          ...item,
          product
        }
      })

      return {
        favoriteList
      }
    }
  }
})
